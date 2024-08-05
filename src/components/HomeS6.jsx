
import React from 'react';
import '../styles/HomeS6.css';

const cardData = [
  {
    imgSrc: './images/fast delivery.png',
    title: 'Free Shipping',
    description: 'Free shipping for order above $150'
  },
  {
    imgSrc: './images/package box 8.png',
    title: 'Money Guarantee',
    description: 'Within 30 days for an exchange'
  },
  {
    imgSrc: './images/pac9.png',
    title: 'Online Support',
    description: '24 hours a day, 7 days a week'
  },
  {
    imgSrc: './images/pac 10.png',
    title: 'Flexible Payment',
    description: 'Pay with multiple credit cards'
  }
];

export default function HomeS6() {
  return (
    <div className='container'>
      <div className='home-s6'>
        {cardData.map((card, index) => (
          <div key={index} className='home-S6-card'>
            <img src={card.imgSrc} alt={card.title} />
            <p>{card.title}</p>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


