
import React from 'react'
import '../styles/HomeS2.css'
import { useNavigate } from 'react-router-dom'; 
export default function HomeS2() {
  const navigate = useNavigate();
  return (
    <div className='home-s2'>
      <div className='container'>
        <div className='home-s2-cards'>
          <div className='s2-card'>
            <div className='s2-card-desc'>
                <div className='desc-right-top'><span>50% OFF</span></div>
                <p>Mackbook Air M2</p>
                <p>Don’t miss the last opportunity </p>
                <button className="hero-button" onClick={() => navigate('/shop')}>Shop Now <img src="/images/arrow-fff.png" alt="" /></button>
            </div>
            <div className='s2-card-image'><img src="/images/image 15.png" alt="" /></div>
          </div>
          <div className='s2-card'>
            <div className='s2-card-desc'>
                <div className='desc-right-top'><span>50% OFF</span></div>
                <p>Iphone 14 Pro</p>
                <p>Don’t miss the last opportunity  </p>
                <button className="hero-button" onClick={() => navigate('/shop')}>Shop Now <img src="/images/arrow-fff.png" alt="" /></button>
            </div>
            <div className='s2-card-image'><img src="/images/image 16.png" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

