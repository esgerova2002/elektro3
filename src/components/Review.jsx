import React, { useEffect, useState } from 'react';
import "../styles/Review.css";
import "../styles/Address.css";
import ProccedPlace3 from './ProccedPlace3';
import "../styles/ProccedPlace.css";
import Orderconf from './Orderconf';  // Orderconf bileşenini ekledik

export default function Review() {
  const [products, setProducts] = useState([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false); // Yeni durum eklendi

  useEffect(() => {
    fetch('/data/proData.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching the products:', error));
  }, []);

  return (
    <div className={`container ${orderConfirmed ? 'blur-background' : ''}`}> {/* Arka plan bulanıklığı */}
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
              {products.map((product, index) => (
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
          <ProccedPlace3 setOrderConfirmed={setOrderConfirmed} /> {/* setOrderConfirmed'i geçiyoruz */}
        </div>
      </div>
      {orderConfirmed && <Orderconf setOrderConfirmed={setOrderConfirmed} />}

    </div>
  );
}
