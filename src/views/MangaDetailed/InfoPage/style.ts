import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Description = styled.div`
  margin: 18px;
`;

export const TagsWrap = styled.div`
  margin: 10px;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;

export const Tag = styled(Link)`
  display: block;
  padding: 5px 10px;
  background-color: whitesmoke;
  border-radius: 4px;
  margin: 8px 8px 0 0;
  border: 1px solid #e5e5e5;
  text-decoration: none;
  color: rgba(60, 60, 67, 0.6);

  &:hover {
    background-color: hsla(240, 4%, 48%, 0.12);
    color: #212529;
  }
`;
