import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

//#region Components

import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Footer from './Components/Footer';

//#endregion

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
