import React from 'react';
import "../styles/ProccedPlace.css"
import "../styles/ProccedPlace2.css"
export default function ProccedPlace2({ subtotal = 0, deliveryCharge = 0, grandTotal = 0 }) {

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
  )
}