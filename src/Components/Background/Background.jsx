import React from 'react'
import './Background.css'
import Darkarrow from '../../assets/dark-arrow.png'
const Background = () => {
  return (
    <div className='background container'>
      <div className='background-text'>
        <h1>AllOfUsAreSmart</h1>
        
        <p>
          "Stay one step ahead with the latest trends in sneakers, boots and more. 
          Our collection is designed to elevate your wardrobe and express your individuality—one step at a time."
        </p>
        <button className='btn'>Explore more <img src={Darkarrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Background;
