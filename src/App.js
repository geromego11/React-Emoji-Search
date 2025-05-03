import React, { useState, useEffect } from 'react';
import EmojiData from './Emoji.json';
import './App.css';

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const newData = EmojiData.filter(emoji => 
      emoji.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
  }, [search]);

  return (
    <div className="app-container">
      <center>
        <h1>Emoji Search</h1>
        <input 
          type="text" 
          name="search" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </center>
      <div className="emoji-results">
        {data.map((emoji, index) => (
          <div key={index} className="emoji-card">
            <div 
              className="emoji-card-body" 
              onClick={() => {
                navigator.clipboard.writeText(emoji.symbol);
                alert("Emoji Copied!");
              }}
            >
              <span className="emoji-symbol">{emoji.symbol}</span>
              {emoji.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;