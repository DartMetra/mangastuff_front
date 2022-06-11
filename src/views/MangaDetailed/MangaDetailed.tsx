import { Header } from '../../components/Header/Header';
import {
  Banner,
  InfoContainer,
  MainTitle,
  MangaContainer,
  MangaInnerContainer,
  MangaReadButton,
  MangaSidebar,
  MangaSidebarPreview,
  MangaTitle,
  SidebarInfo,
  STab,
  STabList,
  STabPanel,
  STabs,
  SubTitle,
} from './style';
import { InfoItem } from '../../components/InfoItem/InfoItem';
import 'react-tabs/style/react-tabs.css';
import { InfoPage } from './InfoPage/InfoPage';
import { ChapterPage } from './ChaptersPage/ChapterPage';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMangaInfo } from '../../services/manga.service';

export function MangaDetailedPage() {
  const param = useParams();
  const [manga, setManga]: any = useState({});

  useEffect(() => {
    getMangaInfo(param.id as string).then((res) => {
      console.log(res.data);
      console.log(res.data._id);
      setManga(res.data);
    });
  }, []);

  return (
    <>
      <Header></Header>
      <Banner banner={'http://localhost:4000/public/manga/banner/' + manga?.banner}></Banner>
      <MangaContainer>
        <MangaSidebar>
          <MangaSidebarPreview preview={'http://localhost:4000/public/manga/preview/' + manga?.preview}></MangaSidebarPreview>
          <MangaReadButton to="/123243567">Read From First Chapter</MangaReadButton>
          <SidebarInfo>
            <InfoItem value="2000" caption="Year"></InfoItem>
            <InfoItem caption="Year" value={manga?.year}></InfoItem>
            <InfoItem caption="Author" value={manga?.author}></InfoItem>
            <InfoItem caption="Artist" value={manga?.artist}></InfoItem>
          </SidebarInfo>
        </MangaSidebar>
        <MangaInnerContainer>
          <MangaTitle>
            <MainTitle>{manga?.title}</MainTitle>
            <SubTitle>{manga?.originalTitle}</SubTitle>
          </MangaTitle>
          <InfoContainer>
            <STabs disableUpDownKeys={true} selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
              <STabList>
                <STab>Description</STab>
                <STab>Chapters</STab>
                <STab>Feedback</STab>
              </STabList>
              <STabPanel>
                {' '}
                <InfoPage description={manga?.description} _id={manga?._id} genres={manga?.genres}></InfoPage>
              </STabPanel>
              <STabPanel>
                <ChapterPage></ChapterPage>
              </STabPanel>
              <STabPanel>Panel 3</STabPanel>
            </STabs>
          </InfoContainer>
        </MangaInnerContainer>
      </MangaContainer>
    </>
  );
}
