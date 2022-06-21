import { HeaderLink, HeaderWrap, Next, Page, Prev, ReaderContainer } from './style';
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMangaInfo } from '../../services/manga.service';
import { getChapter } from '../../services/chapter.service';
import { API_URL } from '../../services';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { Loader } from '../../components/Loader/Loader';

function ReaderPage() {
  const param = useParams();
  const [chapter, setChapter]: any[] = useState({});
  const [loading, setLoading]: any[] = useState(true);
  const [manga, setManga]: [manga: any, setManga: any] = useState({});
  const [size, setSize]: any[] = useState(60);
  const [index, setIndex]: any[] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setIndex(0);
    setChapter({});
    setLoading(true);
    getMangaInfo(param.id as string).then((res) => {
      setManga(res.data);
      getChapter(param.id as string, param.chapter as string).then((res) => {
        setChapter(res.data);
        if (!res?.data?.chapter && res?.data?.chapter != 0) {
          navigate('/manga/' + param.id);
        }
        setLoading(false);
      });
    });
  }, [param]);

  function nextPage() {
    if (index + 1 >= chapter?.pages?.length) {
      navigate('/manga/' + param.id + '/chapter/c' + (+(param.chapter as string) + 1), { state: { index: 0 } });
      //location.reload();
    } else {
      setIndex(index + 1);
    }
  }

  function prevPage() {
    if (index <= 0) {
      if (+chapter?.chapter <= 0) {
        navigate('/manga/' + param.id);
      } else {
        navigate('/manga/' + param.id + '/chapter/c' + (+chapter?.chapter - 1));
        //location.reload();
      }
    } else {
      setIndex(index - 1);
    }
  }

  function onKeyDown(e) {
    if (e.key == 'ArrowLeft') {
      prevPage();
    } else if (e.key == 'ArrowRight') {
      nextPage();
    }
  }

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <HeaderWrap>
            <HeaderLink to={'/manga/' + manga?._id}>{manga?.title}</HeaderLink>
            <HeaderLink to="#">{`Page ${index + 1}/${chapter?.pages?.length}`}</HeaderLink>
          </HeaderWrap>
          <ReaderContainer>
            {chapter?.pages && chapter.pages[0] ? (
              <Page src={API_URL + 'public/page/' + chapter?.pages[index]} alt="page" />
            ) : (
              ''
            )}
            <Prev tabIndex={0} onClick={prevPage}></Prev>{' '}
            <Next tabIndex={0} onKeyDown={onKeyDown} onClick={nextPage}></Next>
          </ReaderContainer>
        </>
      )}
    </>
  );
}
export default observer(ReaderPage);
