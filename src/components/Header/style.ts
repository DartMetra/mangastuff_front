import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  background-color: brown;
  position: sticky;
  top: 0;
  width: 100%;
  margin: 0px;
  padding: 0px;
  border: 0px;
  z-index: 100;
`;

export const HeaderInput = styled.input`
  border-radius: 5px;
  border: 0px;
  padding: 5px;
  padding-left: 15px;

  &:active {
    border: 0px;
  }
  &:focus {
    outline: none;
  }
`;

export const HeaderAuthContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const HeaderLabel = styled(Link)`
  margin-right: 10px;
`;

export const HeaderProfile = styled.div``;
