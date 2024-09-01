

import React, { useState, useEffect } from 'react';
import '../styles/HomeS3.css';

export default function HomeS3() {
  const [currentCategory, setCurrentCategory] = useState('new');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/proData.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  const handleCategoryChange = (category3) => {
    setScrollPosition(window.scrollY);
    setCurrentCategory(category3);
  };

  const currentProducts = products.filter(product => product.category3 === currentCategory);

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [currentCategory, scrollPosition]);

  return (
    <div className='container'>
      <div className='home-s3'>  
        <div className='home-s3-basliq'>
          <p className='p-home-s3-basliq'>Top Selling Products</p>
          <div className='s3-basliq-2'>
          <ul>
              <li><button type="button" onClick={() => handleCategoryChange('new')}>New</button></li>
              <li><button type="button" onClick={() => handleCategoryChange('featured')}>Featured</button></li>
              <li><button type="button" onClick={() => handleCategoryChange('topRated')}>Top Rated</button></li>
            </ul>
          </div>
        </div>
        <div className='home-s3-products'>
          <div className='home-s3-onePro'>
            <p>Apple iPad Pro 
            Wi-Fi</p>
            <span>$1520</span>
            <img src="./images/PngItem_1757515 1.png" alt="" />
          </div>
          <div className='home-s3-pro'>
            {currentProducts.map(product => (
              <a href={`/product/${product.id}`} key={product.id} className='home-s3-pro-card'>
                <div className='home-s3-pro-card-img'>
                  <img src={product.imgSrc} alt={product.name} />
                </div>
                <p>{product.name}</p>
                <div className='s3-card-star'>
                  <img src="./images/star.png" alt="star" />
                  <img src="./images/star.png" alt="star" />
                  <img src="./images/star.png" alt="star" />
                  <img src="./images/star.png" alt="star" />
                  <img src="./images/star.png" alt="star" />
                </div>
                <span>{product.price}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}