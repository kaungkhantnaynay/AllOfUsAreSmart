import React from "react";
import "./App.css";
import MainPage from "./MainPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoesGallery from './Components/ShoesGallery/ShoesGallery.jsx';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Cart from './Components/Cart/Cart';
import { CartProvider } from './Components/CartContext';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ShoesGallery" element={<ShoesGallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
