import styled from 'styled-components';
import { colors } from '../../components';

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: ${colors.bgBlack1};
  border-radius: 4px;
`;
export const FormInput = styled.input`
  width: 250px;
  color: ${colors.textBlack};
  margin-top: 5px;
`;
export const Btn = styled.button`
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
