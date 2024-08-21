
import React from 'react';
import "../styles/ProccedPlace.css";

export default function ProccedPlace3({ subtotal = 0, deliveryCharge = 0, grandTotal = 0, setOrderConfirmed }) {
  const handlePlaceOrder = () => {
    setOrderConfirmed(true);
  };

  return (
    <div className='checkcard'>
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
      <button className='checproc' onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
}


