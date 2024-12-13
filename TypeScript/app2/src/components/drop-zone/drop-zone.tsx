import React, { FC, useCallback, useEffect, useState } from 'react';
import { StyledDropZone } from './drop-zone.styled';
import { useDropzone } from 'react-dropzone';

interface FileWithPreview extends File {
  preview: string;
}

const DragAndDropPicture: FC = () => {
  const [file, setFile] = useState<FileWithPreview | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const droppedFile = acceptedFiles[0];

      const fileWithPreview = Object.assign(droppedFile, {
        preview: URL.createObjectURL(droppedFile),
      });

      setFile(fileWithPreview);
      console.log(fileWithPreview);
    }
  }, []);

  const removeFile = () => {
    if (file?.preview) {
      URL.revokeObjectURL(file.preview);
    }
    setFile(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/jpeg': ['.jpeg', '.jpg'], 'image/png': ['.png'] },
    maxSize: 5 * 1024 * 1024,
    multiple: false,
  });

  // cleanUp function

  useEffect(() => {
    return () => {
      if (file?.preview) {
        URL.revokeObjectURL(file.preview);
      }
    };
  }, [file]);

  return (
    <div>
      <StyledDropZone>
        <div {...getRootProps()} className="">
          <input {...getInputProps()} className="main" />
          <div className="icon-container"></div>
          {isDragActive ? (
            <p>Drop the image here ...</p>
          ) : (
            <p>
              <span className="underline">Click To Upload</span> or drag and
              drop svg, jpeg, jpg
            </p>
          )}
        </div>

        {file && (
          <div style={{ marginTop: '20px', position: 'relative' }}>
            <img src={file.preview} alt={file.name} style={{}} />
            <button onClick={removeFile}>X</button>
          </div>
        )}
      </StyledDropZone>
    </div>
  );
};

export default DragAndDropPicture;
