import React from 'react';
import './MayLikeItem.css';
import RedBtn from '../TheRedBtn/RedBtn';

function MayLikeItem({ img, name, id }) {
  return (
    <div className='MayLikeItem-container'>
      <div className="MayLikeItem-wrapper">
        <div className="MayLikeItem-img">
          <img src={img} alt={name} />
        </div>
        <div className="MayLikeItem-end">
          <span>{name}</span>
          <RedBtn id={id} name="SEE PRODUCT" />
        </div>
      </div>
    </div>
  );
}

export default MayLikeItem;
