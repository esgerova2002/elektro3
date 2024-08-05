
import React, { useState, useEffect } from 'react';
import '../styles/HomeS3.css';

const productData = {
  new: [
    { id: 1, imgSrc: './images/image 24.png', name: 'Panasonic Lumix DC-GH5 II', price: '$1500.00' },
    { id: 2, imgSrc: './images/image 25.png', name: 'Asus ROG Delta S', price: '$250.00' },
    { id: 3, imgSrc: './images/image 26.png', name: 'Xiaomi Fimi X8 Mini', price: '$650.00' },
    { id: 4, imgSrc: './images/image 27.png', name: 'Apple iPhone 13', price: '$500.00' },
    { id: 5, imgSrc: './images/image 28.png', name: 'Fossil Gen 6 Smart Watch', price: '$450.00' },
    { id: 6, imgSrc: './images/image 29.png', name: 'Apple iPad Air Wi-Fi', price: '$850.00' },
  ],
  featured: [
    { id: 7, imgSrc: './images/image 20.png', name: 'Apple iPad Pro Wi-Fi', price: '$800.00' },
    { id: 8, imgSrc: './images/image 21.png', name: 'Apple iPad Air Wi-Fi', price: '$600.00' },
    { id: 9, imgSrc: './images/image 22.png', name: 'Apple iPad Pro 2021', price: '$1000.00' },
    { id: 10, imgSrc: './images/image 18.png', name: 'Apple iPad Mini 6 Wi-Fi', price: '$500.00' },
    { id: 11, imgSrc: './images/image 22.png', name: 'Apple iPad Mini 6 Wi-Fi', price: '$500.00' },
    { id: 12, imgSrc: './images/image 17.png', name: 'Apple iPad Mini 6 Wi-Fi', price: '$500.00' },
  ],
  topRated: [
    { id: 13, imgSrc: './images/image 21.png', name: 'Apple iPad Air Wi-Fi', price: '$600.00' },
    { id: 14, imgSrc: './images/image 19.png', name: 'Apple iPad Pro 2020', price: '$900.00' },
    { id: 15, imgSrc: './images/image 20.png', name: 'Apple iPad Mini 5 Wi-Fi', price: '$400.00' },
    { id: 16, imgSrc: './images/image 21.png', name: 'Apple iPad Air Wi-Fi', price: '$600.00' },
    { id: 17, imgSrc: './images/image 22.png', name: 'Apple iPad Pro 2021', price: '$1000.00' },
    { id: 18, imgSrc: './images/image 18.png', name: 'Apple iPad Mini 6 Wi-Fi', price: '$500.00' },
  ],
};

export default function HomeS3() {
  const [currentCategory, setCurrentCategory] = useState('new');
  const [scrollPosition, setScrollPosition] = useState(0);
  const currentProducts = productData[currentCategory];

  const handleCategoryChange = (category) => {
    setScrollPosition(window.scrollY);
    setCurrentCategory(category);
  };

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
              <div key={product.id} className='home-s3-pro-card'>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


