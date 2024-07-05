import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Home.css';
import SectionFirst from '../../Components/SectionFirst/SectionFirst';
import Item from '../../Components/Item/Item';
import Headphone from '../../Components/Assets/shared/desktop/image-category-thumbnail-headphones.png';
import Speaker from '../../Components/Assets/shared/desktop/image-category-thumbnail-speakers.png';
import EarPhone from '../../Components/Assets/shared/desktop/image-category-thumbnail-earphones.png';
import ZX9 from '../../Components/ZX9/ZX9';
import ZX7 from '../../Components/ZX7/ZX7';
import WeBring from '../../Components/WeBring/WeBring';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <SectionFirst />
        <div className="items-for-show">
          <Link to={'/headphones'}><Item id="2" name="Headphone" img={Headphone} /></Link>
          <Link to={'/speakers'}><Item id="3" name="Speaker" img={Speaker} /></Link>
          <Link to={'/earphones'}><Item id="4" name="Earphone" img={EarPhone} /></Link>
        </div>
        <div className="three-row">
          <ZX9 />
          <ZX7 />
        </div>
        <WeBring />
      </div>
      <div className="home-footer-container">

      <Footer />
      </div>
    </div>
  );
}

export default Home;
