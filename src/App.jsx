import React from "react";
import MainPage from "./MainPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoesGallery from './Components/ShoesGallery/ShoesGallery.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ShoesGallery" element={<ShoesGallery />} />
      </Routes>
    
    </BrowserRouter>
  );
};

export default App;
