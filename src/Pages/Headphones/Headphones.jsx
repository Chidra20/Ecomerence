import React from 'react'
import './Headphones.css'
import Products_navbar from '../../Components/Products_navbar/Products_navbar'
import Type_text from '../../Components/Type-text/Type-text'
import productData from '../../ProductInfo'
import Footer from '../../Components/Footer/Footer'
import RedBtn from '../../Components/TheRedBtn/RedBtn'
import Item from '../../Components/Item/Item';
import Headphone from '../../Components/Assets/shared/desktop/image-category-thumbnail-headphones.png';
import Speaker from '../../Components/Assets/shared/desktop/image-category-thumbnail-speakers.png';
import EarPhone from '../../Components/Assets/shared/desktop/image-category-thumbnail-earphones.png';
import { Link } from 'react-router-dom'


function Headphones() {
  return (
    <div>
        <Products_navbar pro="Headphones"/>
        <div className="headphones-container">
          
          <div className="first-headphone">
            <div className="headphone-img">
                <img src={productData[0].img} alt="" />
            </div>
            <div className='headphone-info'>
                <Type_text name={productData[0].name} description={productData[0].description}/>
                <div className="SP">
                  <RedBtn name="SEE PRODUCT" id="1"/>
                </div>
            </div>
          </div>


          <div className="first-headphone">
            <div className='headphone-info'>
                  <Type_text name={productData[1].name} description={productData[1].description}/>
                  <div className="SP">
                    <RedBtn name="SEE PRODUCT" id="2"/>
                  </div>
              </div>
              <div className="headphone-img">
                  <img src={productData[1].img} alt="" />
              </div>
          </div>

          <div className="first-headphone">
              <div className="headphone-img">
                  <img src={productData[4].img} alt="" />
              </div>
            <div className='headphone-info'>
                  <Type_text name={productData[4].name} description={productData[4].description}/>
                  <div className="SP">
                    <RedBtn name="SEE PRODUCT" id="5"/>
                  </div>
              </div>
          </div>

          <div className="headphones-items-for-show">
            <Link to={'/headphones'}><Item id="2" name="Headphone" img={Headphone} /></Link>

            <Link to={'/speakers'}>
              <Item id="3" name="Speaker" img={Speaker} />
            </Link>
            
            <Link to={'/earphones'}> 
              <Item id="4" name="Earphone" img={EarPhone} />
            </Link>
          </div>

        </div>

        <div className="footer-container">
          <Footer/>
        </div>
    </div>

  )
}

export default Headphones


//        <Type_text name={productData[0].name} description={productData[0].description}/>
