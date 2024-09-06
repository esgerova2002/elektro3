
import React, { useState } from 'react';
import '../styles/HomeS1.css';
import { useNavigate } from 'react-router-dom'; 
const cardData = [
  { id: 1, imgSrc: '/images/image 9.png', name: 'Mobile Phones' },
  { id: 2, imgSrc: '/images/image 11.png', name: 'Smart TV' },
  { id: 3, imgSrc: '/images/image 13.png', name: 'Smart Watch' },
  { id: 4, imgSrc: '/images/image 10.png', name: 'Laptops' },
  { id: 5, imgSrc: '/images/image 14.png', name: 'Drones' },
  { id: 6, imgSrc: '/images/image 12.png', name: 'Headphones' },
  { id: 7, imgSrc: '/images/image 9.png', name: 'Mobile Phones' },
  { id: 8, imgSrc: '/images/image 11.png', name: 'Smart TV' },
  { id: 9, imgSrc: '/images/image 13.png', name: 'Smart Watch' },
  { id: 10, imgSrc: '/images/image 9.png', name: 'Mobile Phones' },
  { id: 11, imgSrc: '/images/image 11.png', name: 'Smart TV' },
  { id: 12, imgSrc: '/images/image 13.png', name: 'Smart Watch' },
  { id: 13, imgSrc: '/images/image 10.png', name: 'Laptops' },
  { id: 14, imgSrc: '/images/image 14.png', name: 'Drones' },
];

const itemsPerPage = 6;

export default function HomeS1() {
  const navigate = useNavigate(); 
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cardData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(cardData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='Shop-by-Categories'>
      <div className='container'>
        <div className='S-basliqDiv'>
          <p className='S-basliq'>Shop by Categories</p>
          <div className='s1Btn'>
            <button className='s1-left' onClick={handlePrevPage}>
              <img src="./images/arrow-right.png" alt="Previous" />
            </button>
            <button className='s1-right' onClick={handleNextPage}>
              <img src="./images/arrow-left.png" alt="Next" />
            </button>
          </div>
        </div>
        <div className='s1-cards'>
          {currentItems.map(card => (
            <div key={card.id} className='s1-card'>
              <div className='s1-card-circle' onClick={() => navigate('/shop')}>
                <img src={card.imgSrc} alt={card.name} />
              </div>
              <p className='s1-ename' onClick={() => navigate('/shop')}>{card.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




