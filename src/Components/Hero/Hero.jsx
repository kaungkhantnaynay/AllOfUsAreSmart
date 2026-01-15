import React from 'react';
import './Hero.css';
import check_mark from '../../assets/check-mark.png';
import hero_background from '../../assets/Nike-Air-Force-1.jpg';
import white_arrow from '../../assets/white-arrow.png';
import { Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
            <div className="hero-left-icon">
                <h2 className="masked-text">Stay one step ahead</h2>
                <img src={check_mark} alt="" />
            </div>
            <p>with the latest trends in sneakers</p>
            <div>
                <Link to="/ShoesGallery"><button>Latest Collection<img src={white_arrow} alt="" /></button></Link>
            </div>
      </div>

    </div>
  )
}

export default Hero;
