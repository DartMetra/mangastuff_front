import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../components';

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
  background-color: hsla(240, 5%, 48%, 0.1);
  border-radius: 4px;
  margin: 8px 8px 0 0;
  border: 1px solid ${colors.border};
  text-decoration: none;
  color: rgba(235, 235, 245, 0.6);

  &:hover {
    background-color: ${colors.bgGrey};
    color: ${colors.textPrimary};
  }
`;
