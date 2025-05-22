import { useState, useRef } from "react";
import { PlusCircle, XIcon } from "lucide-react";
import Image from "next/image";
import { axiosInstance } from "@/store/slices/productsSlice";

export default function ProductImageUploaderV2({
  onImagesUploaded,
  autoReset = true,
}) {
  const [imageSrcs, setImageSrcs] = useState([]);
  const [uploadData, setUploadData] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  // Handle click on the plus button
  const handleAddImageClick = () => {
    fileInputRef.current.click();
  };

  // Handle when files are selected
  function handleOnChange(changeEvent) {
    const files = changeEvent.target.files;

    if (!files || files.length === 0) return;

    // Reset the image sources array
    const newImageSrcs = [];

    // ! Process each file
    Array.from(files).forEach((file) => {
      const reader = new FileReader();

      reader.onload = function (onLoadEvent) {
        // ! Add to the array of image sources
        newImageSrcs.push(onLoadEvent.target.result);

        // If we've processed all files, update state
        if (newImageSrcs.length === files.length) {
          setImageSrcs(newImageSrcs);
          setUploadData(undefined);
        }
      };

      reader.readAsDataURL(file);
    });
  }

  // Upload images to Cloudinary
  async function handleUpload() {
    setIsUploading(true);

    if (
      !fileInputRef.current.files ||
      fileInputRef.current.files.length === 0
    ) {
      setIsUploading(false);
      return;
    }

    // Track uploaded URLs
    const uploadedUrls = [];

    // Create a copy of the files array to track progress
    const files = Array.from(fileInputRef.current.files);

    // Upload each file
    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "my-uploads");

      try {
        // ! Check if user is authenticated

        await axiosInstance.get(
          `${process.env.NEXT_PUBLIC_LARAVEL_API_URL}/sanctum/csrf-cookie`
        );

        const user = await axiosInstance.get(
          `${process.env.NEXT_PUBLIC_LARAVEL_API_URL}/user`
        );

        if (!user) {
          console.error("User not authenticated");
          return;
        }

        // ! end of authentication check

        const data = await fetch(
          "https://api.cloudinary.com/v1_1/dwjzvuqy4/image/upload",
          {
            method: "POST",
            body: formData,
          }
        ).then((r) => r.json());

        uploadedUrls.push(data.secure_url);
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }

    // ! Pass the uploaded URLs back to the parent component
    if (onImagesUploaded) {
      onImagesUploaded((prev) => [...prev, ...uploadedUrls]);
    }

    setUploadData({ success: true });
    setIsUploading(false);

    // ! Auto-reset after successful upload
    autoReset && resetUploader();
  }

  // Reset the uploader state
  function resetUploader() {
    setImageSrcs([]);
    setUploadData(undefined);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  return (
    <>
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        multiple
        onChange={handleOnChange}
      />

      {/* Product images section */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-4">
          {/* Add button */}

          {/* Image previews */}

          {imageSrcs.map((src, index) => (
            <div
              key={index}
              className="w-[10rem] h-[10rem] relative overflow-hidden shadow-lg border border-stone-700 rounded-md"
            >
              <Image
                src={src}
                alt={`Product Image ${index + 1}`}
                className="object-cover"
                fill
                quality={70}
              />

              <button
                type="button"
                onClick={() => {
                  const newSrcs = [...imageSrcs];
                  newSrcs.splice(index, 1);
                  setImageSrcs(newSrcs);
                }}
                className="absolute top-1 right-1 rounded-full text-red-500 bg-white p-0.5 cursor-pointer"
              >
                <XIcon size={16} />
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddImageClick}
            className="bg-transparent rounded-md flex items-center justify-center overflow-hidden shadow-lg w-[10rem] h-[10rem] relative border border-stone-700"
          >
            <PlusCircle className="w-8 h-8 text-gray-700" />
          </button>
        </div>

        {/* Upload button - shown when images are selected */}

        {imageSrcs.length > 0 && !uploadData && (
          <div className="mt-4">
            <button
              type="button"
              onClick={handleUpload}
              disabled={isUploading}
              className="text-stone-950 bg-stone-50 border border-stone-950 px-4 py-2 rounded hover:bg-stone-200 disabled:bg-blue-300 text-sm"
            >
              {isUploading ? "Uploading..." : "Upload Images"}
            </button>
          </div>
        )}

        {/* Success message */}
        {uploadData && uploadData.success && (
          <div className="mt-2">
            <div className="text-green-600 font-medium">
              ✅ Upload successful!
            </div>
          </div>
        )}
      </div>
    </>
  );
}
