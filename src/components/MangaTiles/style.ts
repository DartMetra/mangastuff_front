import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TilesContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa; /* or add it to the track */
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
  }
`;

export const TilesCaption = styled.h2`
  font-size: 20px;
  margin: 10px 0px 3px 20px;
`;
