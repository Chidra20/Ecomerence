import React, { useRef } from 'react';
import { useCart } from '../Context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';


const Cart = ({ onClose }) => {
  const { cart, removeFromCart, updateCartItem } = useCart();
  const cartRef = useRef(null);

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      onClose(); // Call onClose function passed as prop to close the modal
    }
  };

  const handleRemoveAll = () => {
    cart.forEach(item => removeFromCart(item.id)); // Remove each item from the cart
  };

  // Calculate the total price of the items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Add event listener to detect clicks outside the cart modal
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="cart-model">
      <div ref={cartRef} className="cart-content">
        {cart.length === 0 ? (
          <p className='empty'>Your cart is empty</p>
        ) : (
          <>
            <div className="cart-first">
              <h2>Cart ({cart.length})</h2>
              <span onClick={handleRemoveAll} className="remove-all">
                Remove All
              </span>
            </div>
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div className="item-details">
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                  </div>
                  <div className="quantity">
                    <button onClick={() => item.quantity > 1 ? updateCartItem(item.id, item.quantity - 1) : removeFromCart(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateCartItem(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="total-price">
              <h3>Total: ${totalPrice.toFixed(2)}</h3>
            </div>
            <div className='checkout'>
              <Link to={'/checkout'} className='checkout'>
                <button onClick={onClose}>CHECKOUT</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
