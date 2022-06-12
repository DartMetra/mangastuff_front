import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ChapterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Chapter = styled(Link)`
  display: block;
  padding: 5px 8px;
`;
