import React, { useState } from 'react';
import Navigation from '../components/Navigation'; // Import Navigation

const EventHandlingDemo = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* Thêm Navigation */}
      <Navigation />

      <div
        className="card p-4"
        style={{ backgroundColor: '#2a2a2a', color: '#ffffff', border: '1px solid #333' }}
      >
        <h1 style={{ color: '#01AA85' }}>Event Handling Demo</h1>
        <p>Count: {count}</p>
        <button
          className="btn"
          onClick={handleButtonClick}
          style={{
            backgroundColor: '#01AA85',
            color: '#ffffff',
            border: 'none',
            padding: '10px 20px',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#019670')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#01AA85')}
        >
          Increase Count
        </button>
      </div>
    </div>
  );
};

export default EventHandlingDemo;
