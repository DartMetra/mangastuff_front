import { GlobalStyle, HeaderLink, HeaderWrap, Next, Page, Prev, ReaderContainer } from './style';
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMangaInfo } from '../../services/manga.service';
import { getChapter } from '../../services/chapter.service';
import { API_URL } from '../../services';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

function ReaderPage() {
  const { store } = useContext(Context);
  const param = useParams();
  const [chapter, setChapter]: any[] = useState({});

  const [manga, setManga]: [manga: any, setManga: any] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    store.setLoading(true);
    getMangaInfo(param.id as string).then((res) => {
      console.log(res.data);
      console.log(res.data._id);
      setManga(res.data);
      getChapter(param.id as string, param.chapter as string).then((res) => {
        console.log(res.data);
        setChapter(res.data);
        store.setLoading(false);
        console.log('EFFECT');
      });
    });
  }, []);

  function nextPage() {
    console.log('NEXT');
  }

  function prevPage() {
    console.log('PREV');
  }

  return (
    <>
      {store.loading ? (
        'LOADER'
      ) : (
        <>
          <GlobalStyle></GlobalStyle>
          <HeaderWrap>
            <HeaderLink to={'/manga/' + manga?._id}>{manga?.title}</HeaderLink>
          </HeaderWrap>
          <ReaderContainer>
            {chapter?.pages && chapter.pages[0] ? <Page src={API_URL + 'public/page/' + chapter?.pages[0]} alt="page" /> : ''}
            <Prev onClick={prevPage}></Prev> <Next onClick={nextPage}></Next>
          </ReaderContainer>
        </>
      )}
    </>
  );
}
export default observer(ReaderPage);
