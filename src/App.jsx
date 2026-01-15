import React from "react";
import MainPage from "./MainPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoesGallery from './Components/ShoesGallery/ShoesGallery.jsx';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Cart from './Components/Cart/Cart';
import { CartProvider } from './Components/CartContext';


const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ShoesGallery" element={<ShoesGallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
