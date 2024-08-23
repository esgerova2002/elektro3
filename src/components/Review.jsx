import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext'; // useCart import edildi
import "../styles/Review.css";
import "../styles/Address.css";
import ProccedPlace3 from './ProccedPlace3';
import "../styles/ProccedPlace.css";
import Orderconf from './Orderconf';

export default function Review() {
  const { cartItems } = useCart(); // cartItems buradan çekiliyor
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  useEffect(() => {
    // Örneğin bir API çağrısı veya başka bir yan etki burada gerçekleşebilir
    console.log('Review component mounted or cartItems updated');
  }, [cartItems]); // `cartItems` değiştiğinde tetiklenir

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryCharge = 1.00; // Sabit bir değer
  const grandTotal = subtotal + deliveryCharge;

  return (
    <div className={`container ${orderConfirmed ? 'blur-background' : ''}`}>
      <div className='address'>
        <p className='addresstitle'>Review Your Order</p>
        <div className='addleftleftright'>
          <div className='rewleft'>
            <div className='rewleftpag'>
              <div><img src="\images\home 03.png" alt="" /></div>
              <div></div>
              <div><img src="\images\cardpay.png" alt="" /></div>
              <div></div>
              <div className='docrev'><img src="\images\docrew.png" alt="" /></div>
            </div>
            <div className='addleftpagbot'>
              <p>Address</p>
              <p>Payment Method</p>
              <p>Review</p>
            </div>
            <div className='addtext'>
              <p>Estimated delivery: 08 September 2023</p>
            </div>
            <div className='revcards'>
              {cartItems.map((product, index) => (
                <div key={index} className='revcard'>
                  <img src={product.imgSrc} alt={product.name} />
                  <div className='revtitlepricecount'>
                    <p>{product.name}</p>
                    <p>${(product.price * product.quantity).toFixed(2)}</p>
                    <p>QTY: {product.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='revaddmet'>
              <div className='revaddmetcard'>
                <p>Shipping Address</p>
                <div className='revaddmetcardflex'>
                  <div>
                    <p>Kristin Watson</p>
                    <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                  </div>
                  <img src="\images\edit-rectangle.png" alt="" />
                </div>
              </div>
              <div className='revaddmetcard'>
                <p>Payment Method</p>
                <div className='revaddmetcardflex'>
                  <div>
                    <p>Debit Card (.... .... .... ..89)</p>
                  </div>
                  <img src="\images\edit-rectangle.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <ProccedPlace3 
            subtotal={subtotal} 
            deliveryCharge={deliveryCharge} 
            grandTotal={grandTotal} 
            setOrderConfirmed={setOrderConfirmed} 
          />
        </div>
      </div>
      {orderConfirmed && <Orderconf setOrderConfirmed={setOrderConfirmed} />}
    </div>
  );
}
