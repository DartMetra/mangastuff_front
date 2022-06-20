import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '..';

export const HeaderLink = styled(Link)`
  text-decoration: none;
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  background-color: ${colors.bgBlack1};
  position: sticky;
  top: 0;
  width: 100%;
  margin: 0px;
  padding: 0px;
  border: 0px;
  z-index: 100;
`;

export const LogoutBtn = styled.button`
  color: rgba(235, 235, 245, 0.6);
  background-color: hsla(240, 5%, 48%, 0.1);
  padding-top: 4px;
  box-sizing: border-box;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  margin-left: 20px;
  &:hover {
    background-color: ${colors.bgGrey};
    color: ${colors.textPrimary};
  }
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
  align-items: center;
`;

export const HeaderLabel = styled(Link)`
  margin-right: 10px;
`;

export const HeaderProfile = styled.div``;
