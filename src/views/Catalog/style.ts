import styled from 'styled-components';
import { colors } from '../../components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin: 20px;
`;

export const SearchWrap = styled.div`
  width: 100%;
  background-color: ${colors.bgBlack1};
  margin-left: 20px;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const GenresWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const GenreWrap = styled.div`
  margin-left: 15px;
  margin-top: 6px;
`;

export const SInput = styled.input`
  margin-bottom: 10px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  color: ${colors.textBlack};
`;
export const SSelect = styled.select`
  margin-bottom: 10px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 2px;
  color: ${colors.textBlack};
`;
export const SOption = styled.option`
  color: ${colors.textBlack};
`;
export const SearchCaption = styled.span`
  margin-top: 8px;
  margin-bottom: 4px;
`;
export const SearchBtn = styled.button`
  width: 80px;
  color: rgba(235, 235, 245, 0.6);
  background-color: hsla(240, 5%, 48%, 0.1);
  padding: 5px 10px;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  margin-top: 20px;
  &:hover {
    background-color: ${colors.bgGrey};
    color: ${colors.textPrimary};
  }
`;
