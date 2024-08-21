import React from 'react';
import "../styles/Orderconf.css";

export default function Orderconf({ setOrderConfirmed }) {
  const handleOverlayClick = () => {
    setOrderConfirmed(false); // Arka plana tıklandığında Orderconf bileşenini kapat
  };

  const handleOrderconfClick = (event) => {
    event.stopPropagation(); // Orderconf içindeki tıklamaların arka planı etkilememesi için
  };

  return (
    <div className='orderconfFixed' onClick={handleOverlayClick}>
      <div className='orderconf' onClick={handleOrderconfClick}>
        <div className='orderconfcircle'>
          <div>
            <div>
              <img src="\images\searchordercon.png" alt="" />
            </div>
          </div>
        </div>
        <p>Your order is confirmed</p>
        <p>Thanks for shopping!<br></br> 
          your order hasn’t shipped yet, <br></br>
          but we will send you an email when it’s done.</p>
        <button onClick={() => setOrderConfirmed(false)}>View Order</button>
        <button onClick={() => setOrderConfirmed(false)}>Back to Home</button>
      </div>
    </div>
  );
}



