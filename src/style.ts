import styled from 'styled-components';
import App from './App';

export const SApp = styled(App)`
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa; /* or add it to the track */
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
  }
`;
