import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`newsletter ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1>Get Exclusive Offers</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='Enter your email' />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
