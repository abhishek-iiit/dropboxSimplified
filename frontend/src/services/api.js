import axios from 'axios';

const API_URL = 'http://localhost:9096/api/files';

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return axios.post(`${API_URL}/upload`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const getFiles = () => axios.get(`${API_URL}/`);

export const downloadFile = (id) =>
  axios.get(`${API_URL}/${id}`, { responseType: 'blob' });
