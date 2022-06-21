import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '..';

export const TileContainer = styled.div`
  padding: 5px;
  margin-top: 5px;
  margin-left: 15px;
  margin-bottom: 5px;
  width: 121px;
  height: 176px;
  display: flex;
`;

export const ImageText = styled.div`
  text-align: left;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-size: 300;
  padding: 5px;
  box-sizing: border-box;
  text-decoration: none !important;

  position: relative;
  top: -50px;
  height: 40px;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TileImage = styled.div`
  background-image: url(${(props: { preview: string }) => props.preview});
  background-color: transparent;
  cursor: pointer;
  filter: brightness(0.9);
  color: ${colors.textPrimary1};
  border-radius: 4px;
  height: 176px;
  width: 121px;
  background-position: 50%;
  background-size: cover;
  margin-bottom: 5px;
  transition: filter 0.2s linear;
`;
export const BigTilesWrap = styled.div`
  align-content: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 4px 5px;
  background-color: ${colors.bgBlack1};
  min-width: 70%;
  border-radius: 4px;
`;
