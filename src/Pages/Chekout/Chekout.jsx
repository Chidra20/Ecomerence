import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom' 
import Footer from '../../Components/Footer/Footer'
import './Chekout.css'
import CheckoutSummary from '../../Components/CheckOutSum/CheckOutSum'


function Chekout() {
  const navigate = useNavigate()

  return (
    <div>
      
      <button className='go-back-link' onClick={() => navigate(-1)}>GO BACK</button>
      <Navbar/>
      <CheckoutSummary/>


      <div className="checkout-container">
        <h1>CHECKOUT</h1>

        <div className="billing-info">
          <span className='billing-details-span'>Billing details</span>

          <div className="name-email">
              <div className='name-form'>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' placeholder='Name'/>  
              </div>    
              <div className='email-form'>
                <label htmlFor="email">Email Adress</label>
                <input type="text" id='email' placeholder='Email'/>
              </div>
          </div>

          <div className='number-form'>
            <label htmlFor="number">Number</label>
            <input placeholder='+123 456 789' id='number'/>
          </div>
        </div>


        <div className="shipping-info">
          
          <span className='shiping-span'>Shipping</span>
         
          <div className="adress-form">
            <label htmlFor="adress">Adress</label>
            <input type="text" id='adress' placeholder='1137 William Avenue'/>
          </div>

          <div className="zip-city">
            <div className="zip">
              <label htmlFor="zip">Zip</label>
              <input type="text" placeholder='10001' id='zip'/>
            </div>

            <div className="city">
              <label htmlFor="city">City</label>
              <input type="text" id='city' placeholder='Ney York'/>
            </div>

          </div>
            <div className="country">
              <label htmlFor="country">Country</label>
              <input type="text" id='country' placeholder='USA'/>
            </div>
        </div>
      </div>

  
  
  

      <div className="checkout-footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default Chekout
