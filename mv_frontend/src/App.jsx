import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import './App.css'
import ReviewForm from './pages/Review';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="homepage" element={<Homepage />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="review" element={<ReviewForm />} />
    </Routes>
  </BrowserRouter>
);

export default App;