
import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import "../styles/Footer.css";
import { useNavigate } from 'react-router-dom'; 
export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="container">
        <div className="footcart">
          <div className="foot">
            <img
              src="/images/Group 427319094 (1).png"
              className="footlogo"
              alt="Logo"
              onClick={() => navigate('/')}
            ></img>
            <div className="cailling">
              <img src="/images/calling.png" alt="call"></img>
              <span>(316) 555-0116</span>
            </div>
            <div className="cailling">
              <img src="/images/gmail.png" alt="gmail"></img>
              <span>electro@example.com</span>
            </div>
            <div className="cailling">
              <img src="/images/location.png" alt="location"></img>
              <span>4140 Parker Rd. Allentown, New Mexico 31134</span>
            </div>
          </div>
          <div className="foot">
            <p className="bold">Information</p>
            <ul>
              <li>
                <a href="/account">My Account</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/cart">My Cart</a>
              </li>
              <li>
                <a href="/wishlist">My Wishlist</a>
              </li>
              <li>
                <a href="/check">Checkout</a>
              </li>
            </ul>
          </div>
          <div className="foot">
            <p className="bold">Service</p>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/der">Delivery Information</a>
              </li>
              <li>
                <a href="/pri">Privacy Policy</a>
              </li>
              <li>
                <a href="/ter">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="foot">
            <p className="bold">Subscribe</p>
            <p className="desc">
              Enter your email below to be the first to know about new
              collections.
            </p>
            <div className="finputicon">
              <img src="/images/gmail.png" alt="gmail" className="icon-left" />
              <input
                type="email"
                id="email2"
                name="email"
                placeholder="Your Email"
              />
              <img
                src="/images/arrow-fff.png"
                alt="arrow-right"
                className="icon-right"
              />
            </div>
          </div>
        </div>
        <hr className="fhr" />
        <div className="footbottom">
          <div className="fbleft">
            <img src="/images/Visa.png" alt="visa"></img>
            <img src="/images/Mastercard.png" alt="mastercard"></img>
            <img src="/images/GooglePay.png" alt="googlepay"></img>
            <img src="/images/Amex.png" alt="amex"></img>
            <img src="/images/PayPal.png" alt="paypal"></img>
          </div>
          <div className="fbcenter">
            ©2023 Electro All Rights are reserved️{" "}
          </div>
          <div className="fbright">
            <FaFacebookF className="social" />
            <RiInstagramFill className="social" />
            <FaTwitter className="social" />
          </div>
        </div>
      </div>
    </div>
  );
}

