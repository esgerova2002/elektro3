import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Address.css";
import ProccedPlace2 from './ProccedPlace2';
import "../styles/ProccedPlace.css";
import { IoIosArrowDown } from "react-icons/io";

export default function Address() {
  const navigate = useNavigate();

  const handleDeliverHere = () => {
    navigate('/payment-method'); // 'payment-method' sayfasına yönlendir
  };

  return (
    <div className='container'>
      <div className='address'>
        <p className='addresstitle'>Shipping Address</p>
        <div className='addleftleftright'>
          <div className='addleft'>
            <div className='addleftpag'>
              <div><img src="\images\home 03.png" alt="" /></div>
              <div></div>
              <div><img src="\images\card.png" alt="" /></div>
              <div></div>
              <div><img src="\images\document-text.png" alt="" /></div>
            </div>
            <div className='addleftpagbot'>
              <p>Address</p>
              <p>Payment Method</p>
              <p>Review</p>
            </div>
            <div className='addtext'>
              <p>Select a delivery address</p>
              <p>Is the address you'd like to use displayed below? If so, click the corresponding "Deliver to this address" button. Or you can enter a new delivery address.</p>
            </div>
            <div className='adrcards'>
              <div className='adrcard'>
                <div className='adrcardtitleinputcheck'>
                  <p>Kristin Watson</p>
                  <input type="checkbox" className="addres" name="addres" value="Kristin" />
                </div>
                <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                <div className='adddeledbtn'>
                  <button><img src="\images\edit-rectangle.png" alt="" /> Edit</button>
                  <button><img src="\images\trash.svg" alt="" /> Delete</button>
                </div>
              </div>
              <div className='adrcard'>
                <div className='adrcardtitleinputcheck'>
                  <p>Annette Black</p>
                  <input type="checkbox" className="addres" name="addres" value="Annete" />
                </div>
                <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                <div className='adddeledbtn'>
                  <button><img src="\images\edit-rectangle.png" alt="" />Edit</button>
                  <button><img src="\images\trash.svg" alt="" />Delete</button>
                </div>
              </div>
            </div>
            <button className='deliverHere' onClick={handleDeliverHere}>Deliver Here</button>
            <div className='newAddress'>
              <p>Add a new address</p>
              <div className='adrform'>
                <div>
                  <label htmlFor='name'>Name</label>
                  <input type="text" name="name" id="name" placeholder='Enter Name' />
                </div>
                <div>
                  <label htmlFor='num'>Mobile Number</label>
                  <input type="tel" name="num" id="num" placeholder='Enter Mobile Number' />
                </div>
                <div>
                  <label htmlFor='flat'>Flat, House no., Building, Company, Apartment</label>
                  <input type="text" name="flat" id="flat" />
                </div>
                <div>
                  <label htmlFor='area'>Area, Colony, Street, Sector, Village</label>
                  <input type="text" name="area" id="area" />
                </div>
                <div>
                  <label>City</label>
                  <select>
                    <option>Select City</option>
                  </select><IoIosArrowDown className='adrselicon' />
                </div>
                <div>
                  <label htmlFor='pin'>Pin Code</label>
                  <input type="text" name="pin" id="pin" placeholder='Enter Pin Code' />
                </div>
                <div>
                  <label>State</label>
                  <select>
                    <option>Select State</option>
                  </select><IoIosArrowDown className='adrselicon' />
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor=''>Use as my default address</label>
                </div>
                <button>Add New Address</button>
              </div>
            </div>
          </div>
          <ProccedPlace2 />
        </div>
      </div>
    </div>
  );
}
