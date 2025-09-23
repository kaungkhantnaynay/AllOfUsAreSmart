import React from 'react'
import './About.css'
import about_us from '../../assets/about-us.jpg'
// import about_us_2 from '../../assets/about-us-2.jpg'

function About() {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_us} alt="" className='about-img-1'/>
            {/* <img src={about_us_2} alt="" className='about-img-2'/> */}
        </div>

        <div className="about-right">
            <h2>ABOUT US</h2>
            <h3>Simple. Stylish. For every step.</h3>
            <p>We started as a small group of friends with a shared love for quality footwear and a simple online shop.
            What began with just a few styles and local deliveries quickly grew — step by step. Today, AllOfUsAreSmart has reached customers around the world.
            From our first online orders to now exporting internationally, our journey has always been about staying true to good design, comfort, and the people who wear our shoes.
            </p>
        </div>
      
    </div>
  )
}

export default About;

