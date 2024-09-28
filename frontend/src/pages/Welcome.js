import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navibar from "../components/Navibar";
import "./welcome.css";

const Welcome= () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('pdfFile', file);
  
    try {
      const response = await axios.post("http://localhost:5000/upload", formData);
      console.log('Server Response:', response.data);
  
      if (response.data.success) {
        // Set the file URL
        const pdfFileUrl = response.data.file_url;
  
        // Navigate to the "quiz" page with the file URL as a parameter
        navigate(`/quiz?fileUrl=${encodeURIComponent(pdfFileUrl)}`);
      } else {
        console.error('Error uploading file:', response.data.error);
        // Handle error on the client side as needed
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle error on the client side as needed
    }
  };
  
  return (
    <div>
      <Navibar />
      <h2 className='title-welcome'>Welcome to the Admin Page </h2>
      <div className='container2'style={{ width: 400 }}>
      
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="pdfFile">Choose a PDF file:</label>
            <input
              type="file"
              id="pdfFile"
              accept=".pdf"
              onChange={handleFileChange}
            />
        <button type="submit">Upload</button>
      </form>
      </div>
      <div className='content-welcome'>You can uplod quizes from this page</div>
    </div>
  );
};

export default Welcome;
