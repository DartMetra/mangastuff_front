import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TileContainer = styled.div`
  padding: 5px;
  margin-top: 5px;
  margin-left: 15px;
  margin-bottom: 5px;
  width: 121px;
  height: 220px;
`;

export const ImageText = styled.div`
  text-align: left;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-size: 300;
  padding: 5px;
  box-sizing: border-box;
  color: white;
  text-decoration: none;
  position: absolute;
  bottom: 0;
`;

export const TileImage = styled.div`
  background-image: url(${(props: { preview: string }) => props.preview});
  background-color: transparent;
  cursor: pointer;
  filter: brightness(0.9);
  border-radius: 4px;
  height: 176px;
  width: 121px;
  background-position: 50%;
  background-size: cover;
  margin-bottom: 5px;
  transition: filter 0.2s linear;

  &:hover {
    filter: brightness(1);
  }
`;

export const TileCaption = styled(Link)`
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-size: 300;
  text-decoration: none;
  color: #34282c;

  max-width: 121px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: underline;
  }
`;
export const Div = styled.div``;
