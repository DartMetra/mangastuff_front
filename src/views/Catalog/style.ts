import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin: 20px;
`;

export const SearchWrap = styled.div`
  width: 100%;
  background-color: antiquewhite;
  margin-left: 20px;
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
`;
