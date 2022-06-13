import { Chapter, ChapterWrap } from './style';
import { useState, useEffect } from 'react';
import { getChaptersByManga } from '../../../services/chapter.service';

export function ChapterPage({ _id }) {
  const [chapters, setChapters]: any[] = useState([]);

  useEffect(() => {
    getChaptersByManga(_id).then((res) => {
      console.log(res.data);
      setChapters(res.data.docs);
    });
  }, []);

  return (
    <ChapterWrap>
      {chapters?.map((e) => {
        console.log(e);

        return <Chapter to={'/manga/' + _id + '/chapter/c' + e.chapter}>{'Том ' + e.volume + ' Роздел ' + e.chapter}</Chapter>;
      })}
    </ChapterWrap>
  );
}
