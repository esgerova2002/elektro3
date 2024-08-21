import React from 'react';
import { useCart } from './CartContext'; // Import the context
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import "../styles/Minicart.css";


export default function Minicart() {
  const { cartItems, removeFromCart } = useCart(); // Get cartItems and removeFromCart function from the context
  const navigate = useNavigate(); // Initialize useNavigate

  // Toplam ürün sayısını hesapla
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='minicart'>
      <div className='minicartTop'>
        <p className='minicartbasliq'>You have <span className='addprodatacount'>{totalItems} items</span> in your cart</p>
        {cartItems.map((item, index) => (
          <div key={index} className='minicartProdata'>
            <img src={item.imgSrc} alt={item.name} className='miniimg' />
            <div className='miniProdata'>
              <p className='miniProdatatitle'>{item.name}</p>
              <p className='miniprodtaPrice'>${item.price.toFixed(2)}</p>
              <p className='miniprodatacount'>QTY: {item.quantity}</p>
            </div>
            <div className='minitrash' onClick={() => removeFromCart(item.id)}>
              <img src="/images/trash.svg" alt="tr" />
            </div>
          </div>
        ))}
      </div>
      <div className='minicartbottom'>
        <div className='minicartbottomp2'>
          <p>Subtotal</p>
          <p>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
        </div>
        <button className='minivc'>View Cart</button>
        <button 
          className='minicheck' 
          onClick={() => navigate('/checkout')} // Navigate to Checkout page
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

