import './App.css'
import { Routes, Route } from "react-router-dom";
import Product from './pages/Product';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Contect from './pages/Contect';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetail from './pages/ProductDetail';
import  { useState } from "react";
import CartPopover from "./Components/CartPopover";
import Checkout from './pages/Checkout';


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <CartPopover isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contect />} />
        <Route path="/Login" element={<Login />} />
        <Route path='/Checkout' element = {<Checkout/>} />
        <Route path="*" element={<div className="p-8 text-center text-red-500">Page not found.</div>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App
