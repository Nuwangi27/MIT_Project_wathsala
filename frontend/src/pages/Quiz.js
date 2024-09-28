import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Paper, Button } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Navibar from '../components/Navibar';

function PdfList() {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    // Fetch the list of PDF files from the backend
    fetch('http://localhost:5000/pdfs')
      .then(response => response.json())
      .then(data => setPdfFiles(data))
      .catch(error => console.error('Error fetching PDF files:', error));
  }, []); // The empty array ensures this effect runs only once after the initial render

  const handleOpenPdf = (filename) => {
    setSelectedPdf(filename);
  };
  const handleDownloadPdf = (filename) => {
    window.location.href = `http://localhost:5000/pdf/${filename}`;
  };

  return (
    <div>
      <Navibar/>
      <Paper sx={{ maxWidth: 360, margin: 'auto', padding: '20px', marginTop:'15px'}}>
        <List>
          {pdfFiles.map((file, index) => (
            <ListItem button key={index} onClick={() => handleOpenPdf(file)} sx={{ padding: '10px 16px' }}>
              <ListItemIcon>
                <PictureAsPdfIcon sx={{ color: 'red' }} />
              </ListItemIcon>
              <ListItemText primary={file} />
            </ListItem>
          ))}
        </List>
        </Paper>
      {/* Add an iframe to display the selected PDF */}
      {selectedPdf && (
        <iframe
          title="PDF Viewer"
          src={`http://localhost:5000/pdf/${selectedPdf}`}
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      )}
     
    </div>
  );
}

export default PdfList;
