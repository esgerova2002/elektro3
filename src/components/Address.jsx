import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Address.css";
import ProccedPlace2 from './ProccedPlace2';
import "../styles/ProccedPlace.css";
import { IoIosArrowDown } from "react-icons/io";

export default function Address() {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([
    { id: 1, name: "Kristin Watson", address: "4140 Parker Rd. Allentown, New Mexico 31134" },
    { id: 2, name: "Annette Black", address: "4140 Parker Rd. Allentown, New Mexico 31134" },
  ]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [newAddress, setNewAddress] = useState({
    name: '',
    mobile: '',
    flat: '',
    area: '',
    city: '',
    pin: '',
    state: '',
    default: false,
  });
  const [editingId, setEditingId] = useState(null);

  const handleDeliverHere = () => {
    navigate('/payment-method'); // 'payment-method' sayfasına yönlendir
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // Update the address to set selectedAddress state
  // const handleSelectAddress = (id) => {
  //   setSelectedAddress(id);
  // };
  
  const handleAddNewAddress = () => {
    if (editingId) {
      setAddresses(addresses.map(addr => addr.id === editingId ? { ...newAddress, id: editingId } : addr));
      setEditingId(null);
    } else {
      setAddresses([...addresses, { ...newAddress, id: addresses.length + 1 }]);
    }
    setNewAddress({
      name: '',
      mobile: '',
      flat: '',
      area: '',
      city: '',
      pin: '',
      state: '',
      default: false,
    });
  };

  const handleEditAddress = (id) => {
    const address = addresses.find(addr => addr.id === id);
    setNewAddress(address);
    setEditingId(id);
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
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
              {addresses.map(addr => (
                <div key={addr.id} className='adrcard'>
                  <div className='adrcardtitleinputcheck'>
                    <p>{addr.name}</p>
                    <input
                      type="checkbox"
                      className="addres"
                      name="addres"
                      checked={selectedAddress === addr.id}
                      onChange={() => setSelectedAddress(addr.id)}
                    />
                  </div>
                  <p>{addr.address}</p>
                  <div className='adddeledbtn'>
                    <button onClick={() => handleEditAddress(addr.id)}>
                      <img src="\images\edit-rectangle.png" alt="Edit" /> Edit
                    </button>
                    <button onClick={() => handleDeleteAddress(addr.id)}>
                      <img src="\images\trash.svg" alt="Delete" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className='deliverHere' onClick={handleDeliverHere}>Deliver Here</button>
            <div className='newAddress'>
              <p>{editingId ? 'Edit Address' : 'Add a new address'}</p>
              <div className='adrform'>
                <div>
                  <label htmlFor='name'>Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder='Enter Name'
                    value={newAddress.name}
                    onChange={handleInputChange}
                  />
                </div>
                {/* Diğer input alanları için handleInputChange ile bağlanmış kodları ekleyin */}
                <div>
                  <label htmlFor='num'>Mobile Number</label>
                  <input
                    type="tel"
                    name="num"
                    id="num"
                    placeholder='Enter Mobile Number'
                    value={newAddress.mobile}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor='flat'>Flat, House no., Building, Company, Apartment</label>
                  <input
                    type="text"
                    name="flat"
                    id="flat"
                    value={newAddress.flat}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor='area'>Area, Colony, Street, Sector, Village</label>
                  <input
                    type="text"
                    name="area"
                    id="area"
                    value={newAddress.area}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>City</label>
                  <select
                    name="city"
                    value={newAddress.city}
                    onChange={handleInputChange}
                  >
                    <option value="">Select City</option>
                    {/* Şehir seçeneklerini buraya ekleyin */}
                  </select><IoIosArrowDown className='adrselicon' />
                </div>
                <div>
                  <label htmlFor='pin'>Pin Code</label>
                  <input
                    type="text"
                    name="pin"
                    id="pin"
                    placeholder='Enter Pin Code'
                    value={newAddress.pin}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>State</label>
                  <select
                    name="state"
                    value={newAddress.state}
                    onChange={handleInputChange}
                  >
                    <option value="">Select State</option>
                    {/* State seçeneklerini buraya ekleyin */}
                  </select><IoIosArrowDown className='adrselicon' />
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="default"
                    checked={newAddress.default}
                    onChange={(e) => setNewAddress(prevState => ({
                      ...prevState,
                      default: e.target.checked
                    }))}
                  />
                  <label htmlFor=''>Use as my default address</label>
                </div>
                <button onClick={handleAddNewAddress}>
                  {editingId ? 'Update Address' : 'Add New Address'}
                </button>
              </div>
            </div>
          </div>
          <ProccedPlace2 />
        </div>
      </div>
    </div>
  );
}

