import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './components/MainLayout';
import Home from './pages/home/Home';
import PriceCards from './pages/price-cards/PriceCards';
import Contact from './pages/contact/Contact';
import './App.css';
import AddressDetails from './pages/addressDetails/AddressDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="prices" element={<PriceCards />} />
          <Route path="contact" element={<Contact />} />
          <Route path="address" element={<AddressDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
