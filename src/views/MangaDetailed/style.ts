import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';

export const Banner = styled.div`
  background-image: url(${(props: { banner: string }) => props.banner});
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
  height: 350px;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  filter: brightness(0.6);
`;

export const MangaContainer = styled.div`
  padding-top: 215px;

  display: flex;
  justify-content: center;
`;

export const MangaSidebar = styled.div`
  width: 250px;
  margin-right: 35px;
`;

export const MangaSidebarPreview = styled.div`
  height: 383px;
  width: 250px;
  margin-bottom: 15px;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  border-radius: 4px;
  background-image: url(${(props: { preview: string }) => props.preview});
`;

export const MangaReadButton = styled(Link)`
  width: 250px;
  height: 32px;
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: wheat;
  margin-bottom: 15px;
  color: white;
`;

export const SidebarInfo = styled.div`
  border-radius: 4px;
  background-color: aquamarine;
  padding: 10px;
`;

export const MangaInnerContainer = styled.div`
  width: 55%;
  height: 500px;
`;

export const MangaTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;
`;
export const MainTitle = styled.span`
  color: aliceblue;
  font-size: 25px;
  margin-bottom: 4px;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
`;

export const SubTitle = styled.span`
  color: aliceblue;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
`;

export const InfoContainer = styled.div`
  height: 500px;

  border-radius: 4px;
`;
////////

///////

export const STabs = styled(Tabs)`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`;

export const STabList = styled(TabList)`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  border-radius: 4px;
  background-color: white;
  margin-bottom: 15px;
`;
//STabList.tabsRole = 'TabList';

export const STab = styled(Tab)`
  margin-right: 4px;
  padding: 8px;
  user-select: none;
  cursor: pointer;

  &.is-selected {
    // color: white;
    // background: black;
    background-color: grey;
  }

  &:focus {
    outline: none;
  }
`;
//STab.tabsRole = 'Tab';

export const STabPanel = styled(TabPanel)`
  display: none;
  min-height: 80vh;
  padding: 4px;
  border-radius: 4px;
  background-color: wheat;
  font-family: 'Roboto', sans-serif;
  &.is-selected {
    display: block;
  }
`;
//STabPanel.tabsRole = 'TabPanel';
