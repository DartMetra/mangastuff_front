import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-color:#141414;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  background-color: #1c1c1e;
  top: 0;
  width: 100%;
  margin: 0px;
  padding: 0px;
  border: 0px;
`;

export const ReaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  // background-color: aqua;
  box-sizing: border-box;
`;

export const Page = styled.img``;

export const Next = styled.div`
  width: 70%;
  min-height: 100vh;
  right: 0;
  cursor: pointer;
  position: fixed;
`;

export const Prev = styled.div`
  width: 30%;
  min-height: 100vh;
  left: 0;
  cursor: pointer;
  position: fixed;
`;
