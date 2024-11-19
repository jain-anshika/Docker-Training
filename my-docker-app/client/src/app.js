import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/message');
      const data = await response.json();
      setMessage(data.message);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching message:', error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Docker Full Stack App</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>Message from backend: {message}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;