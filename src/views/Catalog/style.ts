import styled from 'styled-components';

export const BigTilesWrap = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 4px 5px;
  background-color: wheat;
`;

export const MangaTileBig = styled.a`
  width: 20%;
  position: relative;
  display: block;
  padding-top: 40px;
  border-radius: 4px;
  background-color: hsla(240, 5%, 48%, 0.05);
  background-size: cover;
  background-position: 50%;
  cursor: pointer;
`;
