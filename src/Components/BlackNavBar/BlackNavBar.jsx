// BlackNavBar.js
import React, { useState } from 'react';
import './BlackNavBar.css';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import Cart from '../Cart/Cart'; // Import the Cart component

function BlackNavBar() {
  const { cart } = useCart(); // Use the cart state
  const [cartOpen, setCartOpen] = useState(false); // State to manage cart modal visibility

  const handleCartClick = () => {
    setCartOpen(!cartOpen); // Toggle cart modal visibility
  };

  return (
    <div className='black-navbar'>
      <div className="logo">
        <Link to='/home'>
          <span>audiophile</span>
        </Link>        
      </div>

      <ul>
        <li>Home</li>
        <Link to={'/headphones'}>
          <li>Headphones</li>
        </Link>

        <Link to={'/speakers'}>
          <li>Speakers</li>
        </Link>

        <Link to={'/earphones'}>
          <li>Earphones</li>
        </Link>
      </ul>

      <div className="cart" onClick={handleCartClick}>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
        </svg>
        <span className="cart-count">{cart.length}</span>
      </div>

      {cartOpen && <Cart onClose={handleCartClick} />}
    </div>
  );
}

export default BlackNavBar;
