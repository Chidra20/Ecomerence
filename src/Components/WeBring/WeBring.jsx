import React from 'react'
import './WeBring.css'
import GuyImg from '../Assets/shared/desktop/image-best-gear.jpg'

function WeBring() {
  return (
    <div className='weBring'>
        <div className="right-side3">
            <img src={GuyImg} alt="img.png" />
        </div>

        <div className="left-side3">
            <p className='best-gear'>
                Bringing you the <span className='best'>best</span> audio gear
            </p>

            <p>
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and
                audio accessories. We have a large showroom and luxury
                demonstration rooms available for you to browse and
                experience a wide range of our products. Stop by our store to
                meet some of the fantastic people who make Audiophile the
                best place to buy your portable audio equipment.
            </p>
        </div>
    </div>
  )
}

export default WeBring
