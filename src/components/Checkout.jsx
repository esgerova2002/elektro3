import React from 'react';
import { useCart } from './CartContext';
import ProccedPlace from './ProccedPlace';
import "../styles/Checkout.css";

export default function Checkout() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    } else {
      removeFromCart(id);
    }
  };

  // Sepetteki tüm ürünlerin toplam tutarını hesapla
  const subtotal = cartItems.reduce((total, product) => total + (product.price * product.quantity), 0);

  // Teslimat ücreti (sabit 1 dolar)
  const deliveryCharge = 1.00;

  // Genel toplam (subtotal + deliveryCharge)
  const grandTotal = subtotal + deliveryCharge;

  return (
    <div className='container'>
      <div className='checkout'>
        <div className='checbasliq'><p>Checkout</p></div>
        <div className='checgrid'>
          <div className='checppqstable'>
            <div className='ppqs'>
              <p className='ppqstit'>Products</p>
              <p className='ppqstit'>Price</p>
              <p className='ppqstit'>Quantity</p>
              <p className='ppqstit'>Subtotal</p>
            </div>
            {cartItems.map((product, index) => (
              <div key={index} className='ppqs'>
                <div className='checimgtitle'>
                  <img src={product.imgSrc} alt={product.name} />
                  <div className='chectitlecolor'>
                    <p>{product.name}</p>
                    <p>Color: {product.color}</p>
                  </div>
                </div>
                <p>${product.price.toFixed(2)}</p>
                <div className='checplusminus'>
                  <div 
                    className='checminus' 
                    onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                  >-</div>
                  <div className='checkbir'>{product.quantity}</div>
                  <div 
                    className='checkplus' 
                    onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                  >+</div>
                </div>
                <p>${(product.price * product.quantity).toFixed(2)}</p>
                <img 
                  className='checktrash' 
                  src="/images/trash.svg" 
                  alt="tr" 
                  onClick={() => removeFromCart(product.id)}
                />
              </div>
            ))}
          </div>
          <ProccedPlace subtotal={subtotal} deliveryCharge={deliveryCharge} grandTotal={grandTotal} />
        </div>
      </div>
    </div>
  );
}
