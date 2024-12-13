import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUpload: React.FC = () => {
  const [previews, setPreviews] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Generate previews for the uploaded images
    const imagePreviews = acceptedFiles.map(file => {
      console.log(file);
      return URL.createObjectURL(file); // Create object URL for preview
    });
    setPreviews(imagePreviews);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': [], // Only accept image file types
    },
    maxSize: 2 * 1024 * 1024,
  });

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: '2px dashed #007bff',
          borderRadius: '10px',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: isDragActive ? '#f0f8ff' : '#ffffff',
          transition: 'background-color 0.2s ease-in-out',
          cursor: 'pointer',
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop your image files here...</p>
        ) : (
          <p>Click to upload or Drag & drop image</p>
        )}
      </div>

      {/* Display image previews */}
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {previews.map((src, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <img
              src={src}
              alt={`Preview ${index}`}
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
