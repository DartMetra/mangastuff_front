import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '..';

export const ItemWrap = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ItemImg = styled.img`
  height: 120px;
  margin-left: 20px;
`;

export const ItemTitle = styled(Link)``;
export const ItemSubTitle = styled(Link)``;
export const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 20px;
`;
export const RemoveButton = styled.button`
  color: rgba(235, 235, 245, 0.6);
  background-color: hsla(240, 5%, 48%, 0.1);
  padding: 5px 10px;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  margin-right: 20px;
  &:hover {
    background-color: ${colors.bgGrey};
    color: ${colors.textPrimary};
  }
`;
