import React from 'react'
import './SectionFirst.css'
import HeroImg from '../../Components/Assets/home/desktop/image-hero.jpg'
import RedBtn from '../TheRedBtn/RedBtn'
import { Link } from 'react-router-dom'

function SectionFirst() {
  return (
    <div className='hero'>
        <img src={HeroImg} alt="" />
        
        <div className="left-side">
            <div>
                <span>New Product</span>
            </div>

            <div>
                <p className='name1'>
                    XX99 Mark ll
                    Headphones
                </p>
            </div>

            <div>
                <p>Experience natural, lifelike audio and exceptional <br/>
                    build quality made for the passionate music <br /> 
                    enthusiast.  
                </p>
            </div>
            <RedBtn name="SEE PRODUCT" id="1"/> 
        </div>  
    </div>
  )
}

export default SectionFirst
