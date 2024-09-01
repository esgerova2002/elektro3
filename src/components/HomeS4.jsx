
import React from 'react'
import '../styles/HomeS4.css'
import { useNavigate } from 'react-router-dom'; 
export default function HomeS4() {
  const navigate = useNavigate();
  return (
    <div className='homeS4'>
      <div className='homeS4-text'>
        <p>Apple iPhone 13 Pro Max</p>
        <p>Don’t miss the last opportunity </p>
        <button className="hero-button" onClick={() => navigate('/shop')}>Shop Now <img src="./images/arrow-fff.png" alt="" /></button>
      </div>
    </div>
  )
}

