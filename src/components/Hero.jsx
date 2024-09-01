
import React from 'react';
import '../styles/Hero.css';
import { useNavigate } from 'react-router-dom'; 

export default function Hero() {
  const navigate = useNavigate(); 
  return (
    <div className="hero">
      <div className='conteImg'>
           <img src="/images/_Path_.png" alt="" className='circleh' />
          <img src='/images/3circle.png' alt='' className='top-left-img' />
          <div className="hero-content">
          <div className='container'>
            <h1 className="hero-title">Great Sound With Solo Headphone</h1>
            <p className="hero-subtitle">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
            <button className="hero-button"  onClick={() => navigate('/shop')}>Shop Now <img src="/images/arrow-fff.png" alt="" /></button>
          </div>
          </div>
          <img src="/images/3ucbucaq.png" alt="" className='hucbucaq'/>
          <img src="/images/herobottImg.svg" alt="" className='yaricircle' />
        </div>
        <div className='heroImg'>
          <div className='hcircle'>
            <img src="/images/young-handsome-happy-smiling-man-dancing-listening-music-headphones-isolated-white-studio-wall 1.png" alt="" />
          </div>
          <img src="/images/3cir-2.png" alt="" className='bottom-right-img' />
        </div>
    </div>
  );
}


