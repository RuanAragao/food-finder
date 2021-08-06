
import ReactStars from 'react-rating-stars-component';

import photoSample from '../../assets/restaurante-fake.png';
import {
  Restaurant,
  RestaurantInfo,
  RestaurantTitle,
  RestaurantAddress,
  RestaurantThumb
} from './style';

const RestaurantCard = () => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <RestaurantTitle>La K'sa de Macarena</RestaurantTitle>
        <ReactStars
          count={5}
          activeColor="#e7711c"
          edit={false}
          value={4}
          classNames="rating-stars"
          isHalf
        />
        <RestaurantAddress>Av. Santo Antônio, 142</RestaurantAddress>
      </RestaurantInfo>
      <RestaurantThumb src={photoSample} alt="Restaurante Sample" />
    </Restaurant>
  )
};

export default RestaurantCard;