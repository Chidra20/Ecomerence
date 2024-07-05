import React from 'react'
import './ZX9.css'
import Speaker from '../../Components/Assets/shared/desktop/image-category-thumbnail-speakers.png'
import { Link } from 'react-router-dom'


function ZX9() {
  return (
    <div className='container'>
        <div className="right-side ">
            <span>ZX9 Speaker</span>

            <p className='zx-p'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <Link to={`/product/3`}>
                        <button className='sp'>SEE PRODUCT</button>
            </Link>
        </div>

        <div className="left-side">
            <img src={Speaker} alt="" />
        </div>
    </div>
  )
}

export default ZX9
