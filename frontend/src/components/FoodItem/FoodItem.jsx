import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({ id, name, price, description, image, rating }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className='food-item-img-container'>
        <img className='food-item-img' src={`${url}/images/${image}`} alt="" />
        {!cartItems || !cartItems[id]
          ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
          : <div className="food-item-counter">
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <div className='rating-container'>
            <img src={assets.rating_starts} alt="" />
            <p id='rating-number'>{rating}</p>
          </div>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">
          <span className='rupees-sign'>₹</span>
          <span className="item-price">{price}</span>
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
