import React from 'react';
import axios from 'axios';

function PdfUpload({ pdfApi}) {
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post(pdfApi, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response from PDF API:', response.data);
    } catch (error) {
      console.error('Error uploading PDF:', error);
    }
  };

  return (
    <div className="pdf-upload container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <input type="file" className="form-control-file" onChange={handleFileUpload} />
        </div>
      </div>
    </div>
  );
}

export default PdfUpload;
