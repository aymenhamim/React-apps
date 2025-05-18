import { useState } from "react";

export default function HomeImage({ setImagesArray }) {
  const [imageSrcs, setImageSrcs] = useState([]);
  const [uploadData, setUploadData] = useState();
  const [isUploading, setIsUploading] = useState(false);

  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when files are selected)
   */
  function handleOnChange(changeEvent) {
    const files = changeEvent.target.files;

    if (!files || files.length === 0) return;

    // Reset the image sources array
    const newImageSrcs = [];

    // Process each file
    Array.from(files).forEach((file) => {
      const reader = new FileReader();

      reader.onload = function (onLoadEvent) {
        // Add to the array of image sources
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

  /**
   * handleOnSubmit
   * @description Triggers when upload button is clicked
   */
  async function handleOnSubmit(event) {
    event.preventDefault();
    setIsUploading(true);

    const fileInput = document.querySelector('input[type="file"]');

    if (!fileInput.files || fileInput.files.length === 0) {
      setIsUploading(false);
      return;
    }

    // Track uploaded URLs
    const uploadedUrls = [];

    // Create a copy of the files array to track progress
    const files = Array.from(fileInput.files);

    // Upload each file
    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "my-uploads");

      try {
        const data = await fetch(
          "https://api.cloudinary.com/v1_1/dwjzvuqy4/image/upload",
          {
            method: "POST",
            body: formData,
          }
        ).then((r) => r.json());

        imageSrcs.push(data.secure_url);
        uploadedUrls.push(data.secure_url);
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }

    // Update the state with all uploaded image URLs
    setImagesArray((prev) => [...prev, ...uploadedUrls]);
    setUploadData({ success: true });
    setIsUploading(false);
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold my-10">Multi-Image Uploader</h1>

      <div>
        <div className="mb-4">
          <input
            type="file"
            name="file"
            multiple
            className="bg-stone-800 text-white p-2 rounded"
            onChange={handleOnChange}
          />
        </div>

        {imageSrcs.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Image Previews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {imageSrcs.map((src, index) => (
                <div key={index} className="border border-gray-300 rounded p-2">
                  <img
                    src={src}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {imageSrcs.length > 0 && !uploadData && (
          <div className="mt-6">
            <button
              onClick={handleOnSubmit}
              disabled={isUploading}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
            >
              {isUploading ? "Uploading..." : "Upload Files"}
            </button>
          </div>
        )}

        {uploadData && uploadData.success && (
          <div className="mt-4 text-green-600 font-medium">
            ✅ Upload successful!
          </div>
        )}
      </div>
    </div>
  );
}
