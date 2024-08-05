import React, { useState } from "react";
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

function App() {
  const [modalType, setModalType] = useState("");

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

  return (
    <CartProvider> {/* Wrap the app with CartProvider */}
    <Router>
      <Header onLoginClick={handleLoginClick} />
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
    </Router>
    </CartProvider>
  );
}

export default App;
