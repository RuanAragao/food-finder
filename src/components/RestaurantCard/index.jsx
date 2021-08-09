
import ReactStars from 'react-rating-stars-component';

import photo_default from '../../assets/restaurante-fake.png';
import {
  Restaurant,
  RestaurantInfo,
  RestaurantTitle,
  RestaurantAddress,
  RestaurantThumb
} from './style';

const RestaurantCard = ({ restaurant, onClick }) => {
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
      <RestaurantThumb src={restaurant.photos ? restaurant.photos[0].getUrl() : photo_default} alt={restaurant.name} />
    </Restaurant>
  )
};

export default RestaurantCard;