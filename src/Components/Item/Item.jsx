  import React from 'react';
  import { Link } from 'react-router-dom';
  import './Item.css';
  import productData from '../../ProductInfo'; 

  function Item(props) {

    
    return (
      <div className='item-wrapper'>
        
          <div className='item'>
            <img src={props.img} alt={props.name} />
            <div className='name'>
              <span>{props.name}</span>
            </div>
            <span className="buy">SHOP</span>
          </div>
      </div>
    );
  }

  export default Item;
