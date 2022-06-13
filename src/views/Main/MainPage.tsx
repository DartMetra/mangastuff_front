import { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { Loader } from '../../components/Loader/Loader';

import { MangaTiles } from '../../components/MangaTiles/MangaTiles';
import { getChapters } from '../../services/chapter.service';
import { getMangaList } from '../../services/manga.service';

export function MainPage() {
  const [loading, setLoading]: any[] = useState(true);
  const [manga, setManga]: any[] = useState([]);
  const [chapter, setChapter]: any[] = useState([]);

  useEffect(() => {
    setLoading(true);
    getMangaList({ limit: 10 }).then((res) => {
      setManga(res.data.docs);
      console.log('MANGA', res.data.docs);
      getChapters({ limit: 10, order: -1, sortBy: 'createdAt' }).then((res) => {
        setChapter(res.data.docs);
        console.log('CHAPTERS', res.data.docs);
        setLoading(false);
      });
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <Header></Header>
          <MangaTiles
            caption="Останні оновлення"
            manga={chapter.map((e) => {
              return { _id: e.manga?._id, preview: e.manga?.preview, title: e.manga?.title, vol: e.volume, chapter: e.chapter };
            })}
          ></MangaTiles>
          <MangaTiles caption="Пoпулярна манга" manga={manga}></MangaTiles>
        </>
      )}
    </>
  );
}
