import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styled from 'styled-components';
import { colors } from '../../components';

export const STabs = styled(Tabs)`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  width: 80%;
  margin-top: 30px;
`;

export const STabList = styled(TabList)`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  border-radius: 4px;
  background-color: ${colors.bgBlack1};
  margin-bottom: 15px;
`;

export const STab = styled(Tab)`
  margin-right: 4px;
  padding: 8px;
  user-select: none;
  cursor: pointer;

  &.is-selected {
    background-color: grey;
  }

  &:focus {
    outline: none;
  }
`;

export const STabPanel = styled(TabPanel)`
  display: none;
  min-height: 80vh;
  padding: 4px;
  border-radius: 4px;
  background-color: ${colors.bgBlack1};
  font-family: 'Roboto', sans-serif;
  &.is-selected {
    display: block;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: ${colors.bgBlack};
  justify-content: center;
`;
