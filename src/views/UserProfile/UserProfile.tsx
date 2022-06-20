import { useState, useEffect } from 'react';
import { BigTile } from '../../components/BigTile/BigTile';
import { BigTilesWrap } from '../../components/BigTile/style';
import { Header } from '../../components/Header/Header';
import { Loader } from '../../components/Loader/Loader';
import { MangaList } from '../../components/MangaList/MangaList';
import { ListWrap } from '../../components/MangaList/style';
import { getFavorite } from '../../services/favorite.service';
import { STab, STabList, STabPanel, STabs, Wrapper } from './style';

export function UserProfile() {
  const [loading, setLoading]: any[] = useState(true);
  const [favorite, setFavorite]: any[] = useState({});

  useEffect(() => {
    setLoading(true);
    getFavorite().then((res) => {
      console.log(res.data);
      setFavorite(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header></Header>
      {loading ? (
        <Loader></Loader>
      ) : (
        <Wrapper>
          <STabs disableUpDownKeys={true} selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
            <STabList>
              <STab>Улюблені</STab>
              <STab>Прочитано</STab>
              <STab>Покинуто</STab>
              <STab>Читаю</STab>
              <STab>В планах</STab>
            </STabList>
            <STabPanel>
              <MangaList manga={favorite.favorite}></MangaList>
            </STabPanel>
            <STabPanel>
              <MangaList manga={favorite.read}></MangaList>
            </STabPanel>
            <STabPanel>
              <MangaList manga={favorite.abandoned}></MangaList>
            </STabPanel>
            <STabPanel>
              <MangaList manga={favorite.reading}></MangaList>
            </STabPanel>
            <STabPanel>
              <MangaList manga={favorite.planed}></MangaList>
            </STabPanel>
          </STabs>
        </Wrapper>
      )}
    </>
  );
}
