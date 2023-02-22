import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Navbar from './components/Navbar';
import ProductDetail from './pages/products/ProductDetail';
import Products from './pages/products/Products';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/products/:id" element={<ProductDetail />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
