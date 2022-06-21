import { Header } from '../../components/Header/Header';
import {
  Banner,
  InfoContainer,
  MainTitle,
  MangaButton,
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
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMangaInfo } from '../../services/manga.service';
import { Loader } from '../../components/Loader/Loader';
import { addFavorite } from '../../services/favorite.service';

export function MangaDetailedPage() {
  const param = useParams();
  const [manga, setManga]: any = useState({});
  const [favorite, setFavorite]: any = useState(false);
  const [loading, setLoading]: any[] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    console.log(param.id);
    getMangaInfo(param.id as string).then((res) => {
      console.log(res.data);
      console.log(res.data._id);
      setManga(res.data);
      setLoading(false);
    });
  }, [param]);

  return (
    <>
      <Header></Header>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <Banner banner={'http://localhost:4000/public/manga/banner/' + manga?.banner}></Banner>
          <MangaContainer>
            <MangaSidebar>
              <MangaSidebarPreview
                preview={'http://localhost:4000/public/manga/preview/' + manga?.preview}
              ></MangaSidebarPreview>
              <MangaReadButton to={'/manga/' + param.id + '/chapter/c0'}>Read From First Chapter</MangaReadButton>
              <MangaButton onClick={() => setFavorite(!favorite)}>Зберегти</MangaButton>
              {favorite ? (
                <>
                  <MangaButton onClick={() => addFavorite(manga?._id, 'favorite')}>Улюблене</MangaButton>
                  <MangaButton onClick={() => addFavorite(manga?._id, 'read')}>Прочитано</MangaButton>
                  <MangaButton onClick={() => addFavorite(manga?._id, 'planed')}>Заплановано</MangaButton>
                  <MangaButton onClick={() => addFavorite(manga?._id, 'abandoned')}>Покинуто</MangaButton>
                  <MangaButton onClick={() => addFavorite(manga?._id, 'reading')}>Читаю</MangaButton>
                </>
              ) : (
                <></>
              )}
              <MangaButton onClick={() => navigate('chapter/create')}>Додати розділ</MangaButton>

              <SidebarInfo>
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
                <STabs
                  disableUpDownKeys={true}
                  selectedTabClassName="is-selected"
                  selectedTabPanelClassName="is-selected"
                >
                  <STabList>
                    <STab>Description</STab>
                    <STab>Chapters</STab>
                  </STabList>
                  <STabPanel>
                    {' '}
                    <InfoPage description={manga?.description} _id={manga?._id} genres={manga?.genres}></InfoPage>
                  </STabPanel>
                  <STabPanel>
                    <ChapterPage _id={manga?._id}></ChapterPage>
                  </STabPanel>
                </STabs>
              </InfoContainer>
            </MangaInnerContainer>
          </MangaContainer>
        </>
      )}
    </>
  );
}
