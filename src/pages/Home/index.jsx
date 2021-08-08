import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Container,
  Search,
  Logo,
  Wrapper,
  Carousel,
  CarouselTitle
} from './styles';

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
// import Slider from 'react-slick';

import logo from '../../assets/logo.svg';
import photo_default from '../../assets/restaurante-fake.png';
import {
  Card,
  RestaurantCard,
  Modal,
  Map
} from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants } = useSelector((state) => state.restaurants);

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptativeHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: false,
  };

  function handleKeyPress(event) {
    if (event.code === 'Enter') {
      setQuery(inputValue);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Restaurant Finder" />
          <TextField
            label="Pesquisar Restaurantes"
            trailingIcon={<MaterialIcon role="button" icon="search" />}
            outlined
          >
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(event) => setInputValue(event.currentTarget.value)}
            />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...carouselSettings}>
            {restaurants.map((restaurant) => (
              <Card
                photo={restaurant.photos ? restaurant.photos[0].getUrl() : photo_default}
                title={restaurant.name}
              />
            ))}
          </Carousel>
          {restaurants.map((restaurant) => <RestaurantCard restaurant={restaurant} />)}
        </Search>
      </Container>
      <Map query={query} />
      <Modal
        open={modalOpened}
        onClose={() => setModalOpened(false)}
      />
    </Wrapper>
  );
}

export default Home;