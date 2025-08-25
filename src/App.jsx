import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Background from "./Components/Background/Background";
import Title from "./Components/Title/Title";
import NewBrands from "./Components/NewBrands/NewBrands";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TrendingProducts from "./Components/TrendingProducts/TrendingProducts";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer"


const App = () => {
  return(
    <div>
      <Navbar/>
      <Background/>
      <div className="container">
        <Title/>
        <NewBrands/>
        <TrendingProducts/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App;