import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./components/Login";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Success from "./components/Success";
import ProductDetail from "./components/Productdetail";
import "./App.css";
import Register from "./components/Register";
import { CartProvider } from './components/CartContext';
import Minicart from "./components/Minicart";

function App() {
  const [modalType, setModalType] = useState("");
  const [isMinicartOpen, setIsMinicartOpen] = useState(false); // Minicart'ın açık olup olmadığını kontrol etmek için state

  const handleLoginClick = () => {
    setModalType("login");
  };

  const handleRegisterClick = () => {
    setModalType("register");
  };

  const handleCloseLogin = () => {
    setModalType("");
  };

  const handleRegisterSuccess = () => {
    setModalType("success");
  };

  const handleCloseSuccess = () => {
    setModalType("");
  };

  const toggleMinicart = () => {
    setIsMinicartOpen((prevState) => !prevState);
  };

  const minicartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (minicartRef.current && !minicartRef.current.contains(event.target)) {
        setIsMinicartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <CartProvider> {/* Wrap the app with CartProvider */}
      <Router>
        <Header onLoginClick={handleLoginClick} onCartClick={toggleMinicart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
        <Footer />
        {modalType === "login" && (
          <Login
            handleRegisterClick={handleRegisterClick}
            onClose={handleCloseLogin}
          />
        )}
        {modalType === "register" && (
          <Register
            onClose={handleCloseLogin}
            onRegisterSuccess={handleRegisterSuccess}
          />
        )}
        {modalType === "success" && <Success onClose={handleCloseSuccess} />}
        {isMinicartOpen && (
          <div ref={minicartRef}>
            <Minicart />
          </div>
        )}
      </Router>
    </CartProvider>
  );
}

export default App;

