import React from 'react';
import './App.css';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';
import PdfUpload from './components/PdfUpload';

function App() {
  const apiEndpoints = {
    chatApi: 'YOUR_CHAT_API_ENDPOINT',
    pdfApi: 'YOUR_PDF_API_ENDPOINT'
  };
  return (
    <div className="App">
      <Header />
      <div className="content">
        <ChatInterface chatApi={apiEndpoints.chatApi}/>
        <PdfUpload pdfApi={apiEndpoints.pdfApi}/>
      </div>
    </div>
  );
}

export default App;
