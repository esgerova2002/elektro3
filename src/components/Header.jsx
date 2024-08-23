import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaRegHeart } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';
import { BsCart2 } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { useCart } from './CartContext';
import Minicart from './Minicart';
import "../styles/Header.css";

const Header = ({ onLoginClick }) => {
  const { cartItems } = useCart();
  const [isMinicartOpen, setIsMinicartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]); // Ürün verileri için state
  const [showResults, setShowResults] = useState(false); // Arama sonuçlarının görünürlüğü için state

  useEffect(() => {
    // JSON dosyasını fetch ile yükleme
    fetch('/data/proData.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data); // Ürünleri state'e yerleştir
      })
      .catch(error => {
        console.error('Error loading JSON:', error);
      });
  }, []);

  const handleCartClick = () => {
    setIsMinicartOpen(!isMinicartOpen);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term) {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(results);
      setShowResults(true); // Arama yapıldığında sonuçları göster
    } else {
      setFilteredProducts([]);
      setShowResults(false); // Arama terimi boşsa sonuçları gizle
    }
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.search-wrapper')) {
      setShowResults(false); // Sayfanın herhangi bir yerine tıklanırsa sonuçları gizle
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button>Search</button>
          </div>
        </div>
        <div className="headtopright">
          <FaRegHeart className="topicon" />
          <div className="cart-icon-wrapper" onClick={handleCartClick}>
            <BsCart2 className="topicon" />
            <div className="cart-count">
              <span>{cartItems.length}</span>
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
      {isMinicartOpen && (
        <>
          <div className="overlay active" onClick={handleCartClick}></div>
          <Minicart />
        </>
      )}
      {showResults && filteredProducts.length > 0 && (
        <div className="search-results">
          {filteredProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="search-result-item">
              <img src={product.imgSrc} alt={product.name} />
              <div>
                <h4>{product.name}</h4>
                <p>${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
