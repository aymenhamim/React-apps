"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { PlusCircle, XIcon } from "lucide-react";

function ImageUploader({ imgsArray, setImgsArray }) {
  const [loading, setLoading] = useState(false);
  const [deletingIndex, setDeletingIndex] = useState(null);

  const fileInputRef = useRef(null);
  const isProcessing = useRef(false);

  // Handle click on the plus button
  const handleAddImageClick = () => {
    fileInputRef.current.click();
  };

  //  !Upload image
  const handleUpload = async (e) => {
    const file = e.target.files && e.target.files[0];

    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setImgsArray((prev) => [
        ...prev,
        { url: data.url, publicId: data.publicId },
      ]);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  // ! Delete image - FIXED VERSION
  const handleDelete = async (index) => {
    // Prevent multiple simultaneous delete operations
    if (isProcessing.current || deletingIndex === index) return;

    // Get the publicId directly from the array instead of using state
    const publicIdToDelete = imgsArray[index]?.publicId;

    if (!publicIdToDelete) return;

    isProcessing.current = true;
    setDeletingIndex(index);

    try {
      const response = await fetch("/api/delete-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId: publicIdToDelete }),
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`Delete failed with status: ${response.status}`);
      }

      // Only remove from array if API call was successful
      setImgsArray((prev) =>
        prev.filter((img) => img.publicId !== publicIdToDelete)
      );
    } catch (error) {
      console.error("Delete failed:", error);
    } finally {
      setDeletingIndex(null);
      isProcessing.current = false;
    }
  };

  return (
    <div>
      {/* hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        multiple
        onChange={handleUpload}
      />

      {/* product images section */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-4">
          {imgsArray.length > 0 &&
            imgsArray.map((img, i) => (
              <div
                key={i}
                className="w-[10rem] h-[10rem] relative overflow-hidden shadow-lg border border-stone-700 rounded-md"
              >
                <Image
                  src={img?.url}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  alt={`Product Image ${i + 1}`}
                  className="object-cover"
                  fill
                  quality={70}
                />

                <button
                  type="button"
                  onClick={() => handleDelete(i)}
                  disabled={deletingIndex === i}
                  className={`absolute top-1 right-1 rounded-full text-red-500 bg-white p-0.5 cursor-pointer ${
                    deletingIndex === i ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {deletingIndex === i ? (
                    <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <XIcon size={16} />
                  )}
                </button>
              </div>
            ))}

          <button
            type="button"
            onClick={handleAddImageClick}
            disabled={loading}
            className="bg-transparent rounded-md flex items-center justify-center overflow-hidden shadow-lg w-[10rem] h-[10rem] relative border border-stone-700 disabled:opacity-50"
          >
            <PlusCircle className="w-8 h-8 text-gray-700" />
          </button>
        </div>
      </div>

      {loading && <p>Uploading image...</p>}
    </div>
  );
}

export default ImageUploader;
