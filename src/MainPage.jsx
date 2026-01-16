import React, { useEffect } from "react";
import Title from "./Components/Title/Title";
import NewBrands from "./Components/NewBrands/NewBrands";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrendingProducts from "./Components/TrendingProducts/TrendingProducts";
import ShoesGallery from "./Components/ShoesGallery/ShoesGallery";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        offset: location.state.offset || 0,
        duration: 500,
      });
    }
  }, [location]);
  return (
    <div>
      <Hero />
      <div className="container">
        <Title />
        <NewBrands />
        <TrendingProducts />
        <NewsLetter />
      </div>
      <About />
      <div className="container">
        <Contact />
      </div>
    </div>
  )
}

export default MainPage;
