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

        // Don't add to imageSrcs here, only to uploadedUrls
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

  /**
   * resetUploader
   * @description Resets the uploader state
   */
  function resetUploader() {
    setImageSrcs([]);
    setUploadData(undefined);
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = "";
  }

  return (
    <div className="p-4">
      <div>
        <div className="flex items-center gap-10 mb-4">
          <div className="">
            <input
              type="file"
              name="file"
              multiple
              className="bg-stone-800 text-white p-2 rounded text-sm"
              onChange={handleOnChange}
            />
          </div>

          {imageSrcs.length > 0 && !uploadData && (
            <div className="">
              <button
                onClick={handleOnSubmit}
                disabled={isUploading}
                className="text-stone-950 bg-stone-50 border border-stone-950 px-4 py-2 rounded hover:bg-stone-200 disabled:bg-blue-300 text-sm"
              >
                {isUploading ? "Uploading..." : "Upload Files"}
              </button>
            </div>
          )}
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

        {uploadData && uploadData.success && (
          <div className="mt-4">
            <div className="text-green-600 font-medium">
              ✅ Upload successful!
            </div>
            <button
              onClick={resetUploader}
              className="mt-2 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            >
              Upload More Images
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
