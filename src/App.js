import React, { useState } from 'react';
import './App.css';
import Home from './page/Home';
import Footer from './component/footer';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />

        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;