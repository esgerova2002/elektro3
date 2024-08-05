
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaRegHeart } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';
import { BsCart2 } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { useCart } from './CartContext'; // Import the context
import "../styles/Header.css";

const Header = ({ onLoginClick }) => {
  const { cartItems } = useCart(); // Get cartItems from the context


  return (
    <header className="container">
      <div className="headerTop">
        <div className="logo">

          <img src="/images/Group 427319094.png" alt="Logo" />

        </div>
        <div className="allSearch">
          <div className="select-wrapper">
            <select name="all" id="all">
              <option value="all">All</option>
              <option value="noot">Noot</option>
              <option value="tel">Tel</option>
            </select>
            <SlArrowDown className="select-icon" />
          </div>
          <div className="search-wrapper">
            <FaSearch className="search-icon" />
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search"
            />
            <button>Search</button>
          </div>
        </div>
        <div className="headtopright">
          <FaRegHeart className="topicon" />
          <div className="cart-icon-wrapper">
            <BsCart2 className="topicon" />
            <div className="cart-count">

              <span>{cartItems}</span>

            </div>
          </div>
          <button onClick={onLoginClick}>Login</button>
        </div>
      </div>
      <div className="headnav">
        <div className="cat">
          <AiOutlineMenu />
          <select name="cat" id="cat">
            <option value="cat">All Categories</option>
            <option value="noot">Noot</option>
            <option value="tel">Tel</option>
          </select>
          <SlArrowDown />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

