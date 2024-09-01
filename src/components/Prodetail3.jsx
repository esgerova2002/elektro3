import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Prodetail3.css";

export default function Prodetail3() {
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    fetch('/data/proData.json')
      .then(response => response.json())
      .then(data => {
        const selectedProductIds = [39, 10, 9, 8];
        const selectedProducts = data.filter(product => selectedProductIds.includes(product.id));
        setCurrentProducts(selectedProducts);
      })
      .catch(error => console.error('Error fetching proData:', error));
  }, []);

  return (
    <div className='container'>
      <div className='relPro'>
        <p className='relProtitle'>Related Products</p>
        <div className="product-list">
          {currentProducts.map(product => (
            <div key={product.id} className="product-item">
              <Link to={`/product/${product.id}`}>
                <img className='pro-item-img' src={product.imgSrc} alt={product.name} />
                <div className='proItemBottom'>
                  <p>{product.name}</p>
                  <div className='s3-card-star'>
                    <img src="/images/star.png" alt="star" />
                    <img src="/images/star.png" alt="star" />
                    <img src="/images/star.png" alt="star" />
                    <img src="/images/star.png" alt="star" />
                    <img src="/images/star.png" alt="star" />
                  </div>
                  <p>${product.price.toFixed(2)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
