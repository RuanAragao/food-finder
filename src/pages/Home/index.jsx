import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Container,
  Search,
  Logo,
  Wrapper,
  Carousel,
  CarouselTitle,
  ModalTitle,
  ModalContent,
  ModalAddress
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
  Map,
  Loader
} from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptativeHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: true,
  };

  function handleKeyPress(event) {
    if (event.code === 'Enter') {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
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
          {restaurants.length > 0 ? (
            <>
              <CarouselTitle>Na sua Área</CarouselTitle>
              <Carousel {...carouselSettings}>
                {restaurants.map((restaurant) => (
                  <Card
                    photo={restaurant.photos ? restaurant.photos[0].getUrl() : photo_default}
                    title={restaurant.name}
                    key={`restaurant-carousel-${restaurant.place_id}`}
                  />
                ))}
              </Carousel>
            </>
          ) : (
            <Loader />
          )}
          {restaurants.map((restaurant) => (
            <RestaurantCard
              onClick={() => handleOpenModal(restaurant.place_id)}
              restaurant={restaurant}
              key={`restaurant-card-${restaurant.place_id}`}
            />
          ))}
        </Search>
      </Container>
      <Map
        query={query}
        placeId={placeId}
      />
      <Modal
        open={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
        <ModalAddress>{restaurantSelected?.formatted_address}</ModalAddress>
        <ModalContent>{restaurantSelected?.opening_hours?.isOpen() ? 'Aberto agora :-)' : 'Fechado no momento :-('}</ModalContent>
      </Modal>
    </Wrapper>
  );
}

export default Home;