import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../../ProductInfo';

function Type_text(props) {


  return (
    <div>
      <div className='product-details'>
        <span>New product</span>
        <h1>{props.name}</h1>
        <p className='product-description'>{props.description}</p>
      </div>
    </div>
  );
}

export default Type_text;
