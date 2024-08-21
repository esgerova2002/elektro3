import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Address.css";
import ProccedPlace from './ProccedPlace2';
import "../styles/ProccedPlace.css";
import "../styles/PaymentMethod.css"

export default function Address() {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate('/review');
  };

  return (
    <div className='container'>
      <div className='address'>
        <p className='addresstitle'>Payment Method</p>
        <div className='addleftleftright'>
          <div className='addleft'>
            <div className='addleftpag2'>
              <div><img src="\images\home 03.png" alt="" /></div>
              <div></div>
              <div><img src="\images\cardpay.png" alt="" /></div>
              <div></div>
              <div><img src="\images\document-text.png" alt="" /></div>
            </div>
            <div className='addleftpagbot'>
              <p>Address</p>
              <p>Payment Method</p>
              <p>Review</p>
            </div>
            <div className='addtext'>
              <p>Select a payment method</p>
            </div>
            <div className='payform'>
              <div className='payradiotop'>
                <input type="radio" name="paymentMethod" id="" />
                <label>Debit/Credit Card</label>
              </div>
              <div className='paynamenumber'>
                <label>Card Number</label>
                <input type="tel" name="" id="" />
              </div>
              <div className='paynamenumber'>
                <label>Card Name</label>
                <input type="text" name="" id="" />
              </div>
              <div className='paydtacvv'>
                <div>
                  <label htmlFor="">Expiry Date</label>
                  <input type="date" name="" id="" />
                </div>
                <div>
                  <label htmlFor="">CVV</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <button>Add Card</button>
            </div>
            <div className='payradiolabelbattom'>
              <input type="radio" name="paymentMethod" id="" />
              <label>Google Pay</label>
            </div>
            <div className='payradiolabelbattom'>
              <input type="radio" name="paymentMethod" id="" />
              <label>Paypal</label>
            </div>
            <div className='payradiolabelbattom'>
              <input type="radio" name="paymentMethod" id="" />
              <label>Cash on Delivery</label>
            </div>
            <button className='paycont' onClick={handleContinueClick}>Continue</button>
          </div>
          <ProccedPlace />
        </div>
      </div>
    </div>
  );
}


