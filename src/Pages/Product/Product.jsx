import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './Product.css';
import Footer from '../../Components/Footer/Footer';
import BlackNavBar from '../../Components/BlackNavBar/BlackNavBar';
import productData from '../../ProductInfo';
import MayLikeItem from '../../Components/MayLikeItem/MayLikeItem';
import Item from '../../Components/Item/Item';
import Headphone from '../../Components/Assets/shared/desktop/image-category-thumbnail-headphones.png';
import Speaker from '../../Components/Assets/shared/desktop/image-category-thumbnail-speakers.png';
import EarPhone from '../../Components/Assets/shared/desktop/image-category-thumbnail-earphones.png';
import { useCart } from '../../Components/Context/CartContext'; 

function Product() {
  const { id } = useParams();
  const product = productData.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Access addToCart function from CartContext

  if (!product) {
    return <div>Product not found</div>;
  }

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    // Create a new item object to add to the cart
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      img: product.img
    };

    addToCart(item); // Call addToCart function with the item object
  };

  const relatedProducts = product.youMightLike.map(relatedId => 
    productData.find(p => p.id === relatedId)
  );

  return (
    <div>
      <BlackNavBar />
      <button className='go-back-link' onClick={() => navigate(-1)}>GO BACK</button>
      <div className="product-container">
        <div className="product-right-side">
          <div className='product-details'>
            <span>New product</span>
            <h1>{product.name}</h1>
            <p className='product-description'>{product.description}</p>
            <p className='product-price'>${product.price}</p>
          </div>
          <div className="price-changer">
            <button onClick={decrement}>-</button>
            <span>{quantity}</span>
            <button onClick={increment}>+</button>
          </div>
          <button className="add-to-cart" onClick={handleAddToCart}>ADD TO CART</button>
        </div>
        <div className="product-left-side">
          <div className="product-img">
            <img src={product.img} alt={`${product.id}-${product.name}`} />
          </div>
        </div>
      </div>
      <div className="features">
        <h1>Features</h1>
        <p className='features-one'>{product.features[0]}</p>
        <p className='features-two'>{product.features[1]}</p>
      </div>
      <div className="box">
        <h1>IN THE BOX</h1>
        <ul>
          {product.box.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="images-ab-product">
        <div className='first-two'>
          <div className="img-product">
            <img className='show-img' src={product.showImgs[0]} alt="img" />
          </div>
          <div className="img-product">
            <img className='show-img' src={product.showImgs[1]} alt="img" />
          </div>
        </div>
        <div className="img-product third">
          <img className='show-img' src={product.showImgs[2]} alt="img" />
        </div>
      </div>
      <span className='ymal'>YOU MAY ALSO LIKE</span>
      <div className='may-like-items'>
        {relatedProducts.map(relatedProduct => (
          <MayLikeItem
            key={relatedProduct.id}
            img={relatedProduct.img}
            name={relatedProduct.name}
            id={relatedProduct.id}
          />
        ))}
      </div>
      <div className="items-for-show">
        <Link to={'/headphones'}><Item id="2" name="Headphone" img={Headphone} /></Link>
        <Link to={'/speakers'}><Item id="3" name="Speaker" img={Speaker} /></Link>
        <Link to={'/earphones'}><Item id="4" name="Earphone" img={EarPhone} /></Link>
      </div>
      <div className="product-footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default Product;
