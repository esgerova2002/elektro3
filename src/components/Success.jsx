
import React from 'react';
import "../styles/Success.css";

export default function Success({ onClose }) {

  const handleOutsideClick = (e) => {
    if (e.target.className === 'successfixed' || e.target.className === 'successBtn') {
      onClose();
    }
  };

  return (
    <div className='successfixed' onClick={handleOutsideClick}>
     <div className='success'>
     <div className='circle'>
        <div className='circle1'>
            <div className='circle2'>
                <div className='circle3'><img src='.\images\search 4.png' alt='Success'></img></div>
            </div>
        </div>
      </div>
      <h1 className='scp1'>Password Changed Successfully</h1>
      <p className='scp2'>Your password has been updated successfully</p>
      <button className='successBtn' onClick={onClose}>Back to Login</button>
     </div>
    </div>
  );
}

