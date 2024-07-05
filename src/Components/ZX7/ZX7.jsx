import React from 'react'
import './ZX7.css'
import OtherSpeaker from '../Assets/product-zx7-speaker/desktop/image-gallery-3.jpg'
import { Link } from 'react-router-dom'
function ZX7() {
  return (
    <div className='container2'>
      <div className="left-side2">
        <p>ZX7 Speaker</p>
        <Link to={`/product/${6}`}>
          <button className='sp'>SEE PRODUCT</button>
        </Link>
      </div>

      <div className="right-side">
      </div>
    </div>
  )
}

export default ZX7
