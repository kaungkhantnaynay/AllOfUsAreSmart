import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Title from "./Components/Title/Title";
import NewBrands from "./Components/NewBrands/NewBrands";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TrendingProducts from "./Components/TrendingProducts/TrendingProducts";
import ShoesGallery from "./Components/ShoesGallery/ShoesGallery";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero";
import NewsLetter from "./Components/NewsLetter/NewsLetter";


const MainPage = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title/>
        <NewBrands/>
        <TrendingProducts/>
        <NewsLetter/>
      </div>
        <About/>
        <div className="container">
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default MainPage;
