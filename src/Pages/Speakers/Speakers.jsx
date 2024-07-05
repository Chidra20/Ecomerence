import React from 'react'
import './Speakers.css'
import { Link } from 'react-router-dom'
import Products_navbar from '../../Components/Products_navbar/Products_navbar'
import Footer from '../../Components/Footer/Footer'
import Type_text from '../../Components/Type-text/Type-text'
import RedBtn from '../../Components/TheRedBtn/RedBtn'
import productData from '../../ProductInfo'
import Item from '../../Components/Item/Item';
import Headphone from '../../Components/Assets/shared/desktop/image-category-thumbnail-headphones.png';
import Speaker from '../../Components/Assets/shared/desktop/image-category-thumbnail-speakers.png';
import EarPhone from '../../Components/Assets/shared/desktop/image-category-thumbnail-earphones.png';

function Speakers() {
  return (
    <div>
      <Products_navbar pro="Speakers"/>


      <div className="speakers-container">
          
          <div className="first-speaker">
            <div className="speaker-img">
                <img src={productData[2].img} alt="" />
            </div>
            <div className='speaker-info'>
                <Type_text name={productData[2].name} description={productData[2].description}/>
                <div className="SP">
                    <RedBtn name="SEE PRODUCT" id={"3"}/>
                </div>
            </div>
          </div>
        
          <div className="first-speaker">
            <div className='speaker-info'>
                <Type_text name={productData[5].name} description={productData[5].description}/>
                <div className="SP">
                    <RedBtn name="SEE PRODUCT" id="6"/>
                </div>
            </div>
            <div className="speaker-img">
                <img src={productData[5].img} alt="" />
            </div>
          </div>

        </div>

        <div className="speakers-items-for-show">
            <Link to={'/headphones'}><Item id="2" name="Headphone" img={Headphone} /></Link>
            <Item id="3" name="Speaker" img={Speaker} />
            <Item id="4" name="Earphone" img={EarPhone} />
          </div>


      <div className="speakers-footer-container">
          <Footer/>
        </div>
    </div>
  )
}

export default Speakers
