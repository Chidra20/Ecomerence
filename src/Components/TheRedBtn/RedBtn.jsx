import React from 'react';
import { Link } from 'react-router-dom';
import './RedBtn.css';

function RedBtn({ id, name }) {
  return (
    <div className='red-btn'>
      <Link to={`/product/${id}`}>
        <button>{name}</button>
      </Link>
    </div>
  );
}

export default RedBtn;
