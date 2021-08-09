import styled from 'styled-components';

// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffffff;
  padding: 16px;
`;

export const Logo = styled.img`
  display: flex;
  justify-self: center;
  align-self: center;
  width: 166px;
  margin-bottom: 16px;
`;

export const Map = styled.div`
  display: flex;
  width: 500px;
  background-color: red;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 16px;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;


export const ModalTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  text-transform: none;
  letter-spacing: 0.11px;
  margin-bottom: 10px;
`;

export const ModalContent = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  font-weight: normal;
  line-height: 19px;
  text-transform: none;
  letter-spacing: 0.15px;
  margin-bottom: 10px;
`;

export const ModalAddress = styled.address`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  font-weight: normal;
  line-height: 19px;
  text-transform: none;
  letter-spacing: 0.15px;
  margin-bottom: 10px;
`;