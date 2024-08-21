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
import Checkout from "./components/Checkout";
import Address from './components/Address';
import PaymentMethod from "./components/PaymentMethod";
import Review from './components/Review';

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
        setIsMinicartOpen(false); // Dışarıya tıklayınca minicart'ı kapat
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <CartProvider> {/* CartContext ile App'i sarmala */}
      <Router>
        <Header onLoginClick={handleLoginClick} onCartClick={toggleMinicart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/address" element={<Address />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route path="/review" element={<Review />} />
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
          <div ref={minicartRef} className="minicart-container">
            <Minicart />
          </div>
        )}
      </Router>
    </CartProvider>
  );
}

export default App;


