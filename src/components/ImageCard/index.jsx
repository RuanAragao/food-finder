import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Skeleton from '../Skeleton';

const Card = styled.div`
  display: flex;
  width: 90px;
  height: 90px;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const Title = styled.span`
  color: ${(props) => props.theme.colors.textInverse};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
`;

const ImageCard = ({ photo, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  }, [photo]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo}>
          <Title>{title}</Title>
        </Card>
      ) : (
        <Skeleton width="90px" height="90px" />
      )}
    </>
  )
};

export default ImageCard;