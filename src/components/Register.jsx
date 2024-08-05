
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import "../styles/Register.css";

export default function Register({ onClose, onRegisterSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOutsideClick = (e) => {
    if (e.target.className === "closeRegister") {
      onClose();
    }
  };

  const handleRegister = () => {
    onRegisterSuccess();
  };

  return (
    <div className="closeRegister" onClick={handleOutsideClick}>
      <div className="close" onClick={onClose}>X</div>
      <div className="register-container">
        <div className="register">
          <h3 className="welcome">Create New Account</h3>
          <p className="here">Please enter details</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="Form-Group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="Form-Group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="Form-Group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="check">
              <input type="checkbox" id="rem" name="rem" value="check" />
              <label htmlFor="rem"> I agree to the Terms & Conditions</label>
            </div>
            <button onClick={handleRegister} type="submit" className="register">
              Register
            </button>
            <div className="hrp">
              <div className="hr3"></div>
              <p>Or Login With</p>
              <div className="hr3"></div>
            </div>
            <div className="brauz">
              <FcGoogle className="brauzlogo" />
              <span>Login with Google</span>
            </div>
            <div className="brauz">
              <FaApple className="brauzlogo" />
              <span>Login with Apple</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

