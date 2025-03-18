import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { uploadFile } from '../services/api';

const FileUpload = ({ refreshFiles }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpload = async () => {
    if (!selectedFile) return;
    // Call API to upload file
    await uploadFile(selectedFile);
    setSelectedFile(null);
    refreshFiles();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        border: '2px dashed #bbcada',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
      }}
    >
      <input
        type="file"
        onChange={(e) => setSelectedFile(e.target.files[0])}
        style={{
          display: 'block',
          marginBottom: '10px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '5px',
          paddingLeft: '10px',
          paddingRight: '10px'
        }}
      />
      <Button
        variant="contained"
        onClick={handleUpload}
        sx={{
          backgroundColor: '#3498db',
          color: '#ffffff',
          '&:hover': { backgroundColor: '#2874a6' },
          fontWeight: 'bold',
          paddingX: 3,
          paddingY: 1,
          borderRadius: '5px'
        }}
      >
        Upload File
      </Button>
    </Box>
  );
};

export default FileUpload;
