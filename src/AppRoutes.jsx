import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Components/Login/Login';
import MainPage from './MainPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
