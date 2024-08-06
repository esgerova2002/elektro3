import React from 'react'
import "../styles/Prodetail3.css"
export default function Prodetail3() {
  const currentProducts = [
    {
      id: 1,
      name: "Apple iPhone 14 Plus",
      imgSrc: "/images/image 22.png",
      price: 850.00
    },
    {
      id: 2,
      name: "Xiaomi Fimi X8 Mini",
      imgSrc: "/images/image 26.png",
      price: 650.00
    },
    {
      id: 3,
      name: "Apple iPad Mini 6 Wi-Fi",
      imgSrc: "/images/image 19.png",
      price: 500.00
    },
    {
      id: 4,
      name: "Asus ROG Delta S",
      imgSrc: "/images/image 25.png",
      price: 250.00
    }
  ];
  
  return (
    <div className='container'>
      <div className='relPro'>
        <p className='relProtitle'>Related Products</p>
      <div className="product-list">
            {currentProducts.map(product => (
                <div className="product-item">
                  <img className='pro-item-img' src={product.imgSrc} alt={product.name} />
                  <div className='proItemBottom'>
                    <p>{product.name}</p>
                    <div className='s3-card-star'>
                      <img src="/images/star.png" alt="star" />
                      <img src="/images/star.png" alt="star" />
                      <img src="/images/star.png" alt="star" />
                      <img src="/images/star.png" alt="star" />
                      <img src="/images/star.png" alt="star" />
                    </div>
                    <p>${product.price.toFixed(2)}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  )
}
