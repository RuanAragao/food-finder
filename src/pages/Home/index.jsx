import { useState } from 'react';

import {
  Container,
  Search,
  Logo,
  Wrapper,
  Map,
  Carousel,
  CarouselTitle
} from './styles';

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
// import Slider from 'react-slick';

import logo from '../../assets/logo.svg';
import restaurantSample from '../../assets/restaurante-fake.png';
import { Card } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

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
              onChange={(event) => setInputValue(event.value)}
            />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...carouselSettings}>
            <Card photo={restaurantSample} title="Rest'urent Fulifood" />
            <Card photo={restaurantSample} title="Rest'urent Fulifood" />
            <Card photo={restaurantSample} title="Rest'urent Fulifood" />
            <Card photo={restaurantSample} title="Rest'urent Fulifood" />
            <Card photo={restaurantSample} title="Rest'urent Fulifood" />
            <Card photo={restaurantSample} title="Rest'urent Fulifood" />
            <Card photo={restaurantSample} title="Rest'urent Fulifood" />
            <Card photo={restaurantSample} title="Rest'urent Fulifood" />
          </Carousel>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
}

export default Home;