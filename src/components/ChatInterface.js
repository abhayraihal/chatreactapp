// ChatInterface.js
import React, { useState } from 'react';
import axios from 'axios';

function ChatInterface({ chatApi }) {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(chatApi, { prompt });
      setResponse(response.data);
      setChatMessages([...chatMessages, { text: prompt, sender: 'user' }, { text: response.data, sender: 'system' }]);
      setPrompt('');
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <div className="chat-interface">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="chat-container">
              {chatMessages.map((message, index) => (
                <div key={index} className={`chat-message ${message.sender}`}>
                  {message.text}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Type your prompt here..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button" onClick={handleSubmit}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
