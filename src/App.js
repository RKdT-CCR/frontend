import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

//#region Components

import Home from './Components/Home';
import Login from './Components/Login/Login';
import Auth from './Components/Auth';

import { UserStorage } from './Services/UserServices';
import Inicio from './Components/Site/Person/Inicio';
import Account from './Components/Site/Person/Account';

//#endregion

function App() {
  return (
    <UserStorage>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/conta" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;
