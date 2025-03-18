import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';
import { getFiles } from './services/api';

function App() {
  const [files, setFiles] = useState([]);

  const loadFiles = async () => {
    const res = await getFiles();
    setFiles(res.data);
  };

  useEffect(() => {
    loadFiles();
  }, []);

  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        mt: 4, 
        p: 3, 
        borderRadius: 2, 
        boxShadow: '0px 4px 10px rgba(0,0,0,0.2)', 
        backgroundColor: '#f9f9f9' 
      }}
    >
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ textAlign: 'center', color: '#3498db', fontWeight: 'bold' }}
      >
        Dropbox Simplified
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <FileUpload refreshFiles={loadFiles} />
      </Box>

      <FileList files={files} />
    </Container>
  );
}

export default App;
