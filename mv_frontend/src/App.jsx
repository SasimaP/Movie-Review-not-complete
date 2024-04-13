import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import './App.css'
import Navbar from './components/navbar';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="homepage" element={<Homepage />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default App;