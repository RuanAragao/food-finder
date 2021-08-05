import styled from 'styled-components';

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