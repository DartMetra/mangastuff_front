import styled from 'styled-components';
import { colors } from '../../components';

export const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  background-color: ${colors.bgBlack};
  justify-content: center;
  align-items: center;
`;

export const SForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const AuthContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.bgBlack1};
  border-radius: 4px;
  height: 40vh;
  width: 40vh;
`;

export const AuthInput = styled.input`
  outline: none;
  margin: 10px;
  color: ${colors.textBlack};
`;

export const AuthGoogle = styled.button`
  margin: 10px;
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: #ea4335;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  opacity: 0.8;
  &:active {
    background-color: #da4335;
  }
`;
export const AuthButton = styled.button`
  outline: none;
  margin: 10px;
  background-color: #ea4335;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  padding: 4px 12px;
  border-radius: 4px;
  opacity: 0.8;
  color: white;
  &:active {
    background-color: #da4335;
  }
  &:hover {
    background-color: #da4335;
  }
`;
