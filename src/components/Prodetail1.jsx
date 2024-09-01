import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';
import "../styles/Prodetail1.css";

export default function Prodetail1() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); 
  
  const handleAddToCart = () => {
    if (!selectedColor) {
      alert("Zəhmət olmasa bir rəng seçin.");
      return;
    }

    const item = {
      id: product.id,
      name: product.name,
      imgSrc: product.imgSrc,
      price: product.price,
      quantity: quantity,
      color: selectedColor
    };
    addToCart(item);

    alert(`${product.name} səbətə əlavə olundu!`);
  };

  useEffect(() => {
    fetch('/data/proData.json')
      .then(response => response.json())
      .then(data => {
        const productData = data.find(item => item.id === parseInt(productId));
        setProduct(productData);
      });
  }, [productId]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (amount) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + amount));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='container'>
      <div className='product-detail'>
        <div className='breadcrumb'>
          <span>Home</span>
          <img src='/images/apro.svg' alt='' />
          <span>Shop</span>
          <img src='/images/apro.svg' alt='' />
          <span>{product.name}</span>
        </div>
        <div className='product-info'>
          <div className='pro-details-imgs'>
            <div className='product-image'><img src={product.imgSrc} alt={product.name} /></div>
            <div className='pro-img-cards'>
              <div className='product-image-card'><img src={product.imgSrc} alt={product.name} /></div>
              <div className='product-image-card'><img src={product.imgSrc} alt={product.name} /></div>
              <div className='product-image-card'><img src={product.imgSrc} alt={product.name} /></div>
              <div className='product-image-card'><img src={product.imgSrc} alt={product.name} /></div>
            </div>
          </div>
          <div className='product-details'>
            <div className='pro-det-top'>
              <p>{product.name}</p>
              <button>In Stock</button>
            </div>
            <div className='starrev'>
              <div className='s3-card-star'>
                <img src='/images/star.png' alt='star' />
                <img src='/images/star.png' alt='star' />
                <img src='/images/star.png' alt='star' />
                <img src='/images/star.png' alt='star' />
                <img src='/images/star.png' alt='star' />
              </div>
              <span>5.0 (121 Reviews)</span>
            </div>
            <p className='detailprice'>${product.price.toFixed(2)}</p>
            <p className='detaildesc'>{product.descriptions}</p>
            <p className='detailcolor'>Color:</p>
            <div className='selectf'>
              {['Red', 'Black', 'Blue', 'Yellow', 'Green', 'Orange'].map((color) => (
                <div className='optionfcard' key={color}>
                  <input
                    type="checkbox"
                    id={color}
                    value={color}
                    checked={selectedColor === color}
                    onChange={() => handleColorChange(color)}
                    className={`color-checkbox2 ${color.toLowerCase()}`}
                  />
                  <label htmlFor={color}>
                    <div className={`color-box2 ${color.toLowerCase()}`}></div>
                  </label>
                </div>
              ))}
            </div>
            <div className='addpro'>
              <div className='plusminus'>
                <div onClick={() => handleQuantityChange(-1)}>-</div>
                <div>{quantity}</div>
                <div onClick={() => handleQuantityChange(1)}>+</div>
              </div>
              
               <button className='addprobtn' onClick={handleAddToCart}>Add to Cart</button>
              <div className='detailheart'><img src="/images/heart.svg" alt="h" /></div>
            </div>
            <div className='share'>
              <p>Share</p>
              <div className='sharesocial'>
                <div><img src="/images/fb.svg" alt="fb" /></div>
                <div><img src="/images/twitter.svg" alt="tw" /></div>
                <div><img src="/images/instagram.svg" alt="ins" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

