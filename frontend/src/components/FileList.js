import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { downloadFile } from '../services/api';

const FileList = ({ files }) => {
  const handleDownload = async (id, name) => {
    const res = await downloadFile(id);
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', name);
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>
      <Typography 
        variant="h6" 
        sx={{ textAlign: 'center', color: '#2c3e50', fontWeight: 'bold', mb: 2 }}
      >
        Uploaded Files
      </Typography>
      
      <List sx={{ borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}>
        {files.map((file) => (
          <ListItem
            button
            key={file.id}
            onClick={() => handleDownload(file.id, file.name)}
            sx={{
              '&:hover': { backgroundColor: '#f1f1f1' },
              paddingY: 1.5,
              borderBottom: '1px solid #ddd'
            }}
          >
            <ListItemText primary={file.name} secondary={file.type} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default FileList;
