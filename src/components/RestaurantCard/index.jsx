import { useState } from 'react';

import ReactStars from 'react-rating-stars-component';

import photo_default from '../../assets/restaurante-fake.png';
import Skeleton from '../Skeleton';
import {
  Restaurant,
  RestaurantInfo,
  RestaurantTitle,
  RestaurantAddress,
  RestaurantThumb
} from './style';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <RestaurantTitle>{restaurant.name}</RestaurantTitle>
        <ReactStars
          count={5}
          activeColor="#e7711c"
          edit={false}
          value={restaurant.rating}
          classNames="rating-stars"
          isHalf
        />
        <RestaurantAddress>{restaurant.vicinity || restaurant.formatted_address}</RestaurantAddress>
      </RestaurantInfo>
      <RestaurantThumb
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : photo_default}
        onLoad={() => setImageLoaded(true)}
        alt={restaurant.name}
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  )
};

export default RestaurantCard;