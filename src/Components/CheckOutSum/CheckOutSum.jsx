import React from 'react';
import { useCart } from '../Context/CartContext';
import './CheckOutSum.css';

const CheckoutSummary = () => {
  const { cart } = useCart();

  const shippingCost = 50; // Fixed shipping cost
  const vatPercentage = 0.20; // 20% VAT

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const vatAmount = totalPrice * vatPercentage;
  const grandTotal = totalPrice + shippingCost;

  return (
    <div className="checkout-summary">
      <h2>Summary</h2>
      {cart.length === 0 ? (
        <p className='empty'>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="summary-item">
              <img src={item.img} alt={item.name} />
              <div className="item-details">
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </div>
                
              </div>
            </div>
          ))}
          <div className="summary-totals">
            <div className="total">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="shipping">
              <span>Shipping</span>
              <span>${shippingCost.toFixed(2)}</span>
            </div>
            <div className="vat">
              <span>VAT (INCLUDED)</span>
              <span>${vatAmount.toFixed(2)}</span>
            </div>
            <div className="grand-total">
              <span>Grand Total</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
          </div>
          <div className="pay">
            <button>QONTINUE & PAY</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutSummary;
