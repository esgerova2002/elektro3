import React from 'react';
import { useCart } from './CartContext';
import "../styles/ProccedPlace.css";
import "../styles/ProccedPlace2.css";

// eslint-disable-next-line no-unused-vars
import { useContext } from 'react';

export default function ProccedPlace2() {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    // Teslimat ücreti (sabit 1 dolar)
    const deliveryCharge = 1.00;

    // Genel toplam (subtotal + deliveryCharge)
    const grandTotal = subtotal + deliveryCharge;

  return (
    <div className='checkcard2'>
      <div className='checksubtotal'>
        <p>Subtotal</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      <div className='discode'>
        <p className='discodetitle'>Enter Discount Code</p>
        <div className='discodeflatapply'>
          <div className='discodeflat'>FLAT50</div>
          <button>Apply</button>
        </div>
      </div>
      <div className='checkdelivery'>
        <p>Delivery Charge</p>
        <p>${deliveryCharge.toFixed(2)}</p>
      </div>
      <div className='checkgrand'>
        <p>Grand Total</p>
        <p>${grandTotal.toFixed(2)}</p>
      </div>
    </div>
  );
}
