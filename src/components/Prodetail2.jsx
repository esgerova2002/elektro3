import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/Prodetail2.css";

export default function Prodetail2() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedTab, setSelectedTab] = useState('description');

  useEffect(() => {
    fetch('/data/proData.json')
      .then(response => response.json())
      .then(data => {
        const selectedProduct = data.find(p => p.id === parseInt(productId));
        setProduct(selectedProduct);
      });
  }, [productId]);

  if (!product) {
    return <div>Yüklənir...</div>;
  }

  return (
    <div className='container'>
      <div className='prode2'>
        <div className='descaddrev'>
          <ul>
            <li>
              <button onClick={() => setSelectedTab('description')}>Descriptions</button>
            </li>
            <li>
              <button onClick={() => setSelectedTab('additional')}>Additional Information</button>
            </li>
            <li>
              <button onClick={() => setSelectedTab('reviews')}>Reviews</button>
            </li>
          </ul>
          <hr className='descaddrevhr' />
          {selectedTab === 'description' && (
            <div className='desc'><p>{product.descriptions}</p></div>
          )}
          {selectedTab === 'additional' && (
            <div className='add'>
              <table>
                <tbody>
                  <tr>
                    <th>Brand</th>
                    <td>{product.brand}</td>
                  </tr>
                  <tr>
                    <th>Item Height</th>
                    <td>{product.height} CM</td>
                  </tr>
                  <tr>
                    <th>Item Width</th>
                    <td>{product.width} Inch</td>
                  </tr>
                  <tr>
                    <th>Screen Size</th>
                    <td>{product.screensize}</td>
                  </tr>
                  <tr>
                    <th>Model Number</th>
                    <td>{product.modelnumber}</td>
                  </tr>
                  <tr>
                    <th>RAM Size</th>
                    <td>{product.ramsize}</td>
                  </tr>
                  <tr>
                    <th>Operating System</th>
                    <td>{product.operatingsystem}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {selectedTab === 'reviews' && (
            <div className='rev'>
              <p className='revTitle'>Customer Reviews</p>
              <div className='revprofil'>
                <div className='proimgname'>
                 <img src={product.profil1} alt="" className='revproimg' />
                 <div className='revnamestar'>
                  <p>{product.profil1name}</p>
                  <div className='revstar'>
                    <img src="/images/revstr.svg" alt="star" />
                    <img src="/images/revstr.svg" alt="star" />
                    <img src="/images/revstr.svg" alt="star" />
                    <img src="/images/revstr.svg" alt="star" />
                    <img src="/images/revstr.svg" alt="star" />
                  </div>
                 </div>
                </div>
                <p className='revcomment'>{product.comment1}</p>
                <p className='revdesc'>{product.descriptions}</p>
                <div className='revblackgray'><span>Review by</span><span> Electro</span><span> Posted on</span><span> Sep 08, 2023</span></div>
              </div>
              <div className='revprofil'>
                <div className='proimgname'>
                 <img src={product.profil2} alt="" className='revproimg' />
                 <div className='revnamestar'>
                  <p>{product.profil2name}</p>
                  <div className='revstar'>
                    <img src="/images/revstr.svg" alt="star" />
                    <img src="/images/revstr.svg" alt="star" />
                    <img src="/images/revstr.svg" alt="star" />
                    <img src="/images/revstr.svg" alt="star" />
                    <img src="/images/revstr.svg" alt="star" />
                  </div>
                 </div>
                </div>
                <p className='revcomment'>{product.comment2}</p>
                <p className='revdesc'>{product.descriptions}</p>
                <div className='revblackgray'><span>Review by</span><span> Electro</span><span> Posted on</span><span> Sep 08, 2023</span></div>
              </div>
              <div className='revadd'>
                <p className='revaddtitle'>Add your Review</p>
                <div className='starTitle'>
                    <p>Your Rating</p>
                    <div className='refvformstar'>
                        <div><img src="/images/revformstar.svg" alt="st" /></div>
                        <div><img src="/images/revformstar.svg" alt="st" /><img src="/images/revformstar.svg" alt="st" /></div>
                        <div><img src="/images/revformstar.svg" alt="st" /><img src="/images/revformstar.svg" alt="st" /><img src="/images/revformstar.svg" alt="st" /></div>
                        <div><img src="/images/revformstar.svg" alt="st" /><img src="/images/revformstar.svg" alt="st" /><img src="/images/revformstar.svg" alt="st" /><img src="/images/revformstar.svg" alt="st" /></div>
                        <div><img src="/images/revformstar.svg" alt="st" /><img src="/images/revformstar.svg" alt="st" /><img src="/images/revformstar.svg" alt="st" /><img src="/images/revformstar.svg" alt="st" /><img src="/images/revformstar.svg" alt="st" /></div>

                    </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
