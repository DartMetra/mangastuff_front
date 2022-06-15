import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { BigTile } from '../../components/BigTile/BigTile';
import { getMangaList } from '../../services/manga.service';
import { BigTilesWrap, MangaTileBig } from './style';

export function Catalog() {
  const param = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('search') || undefined);
  const [yearStart, setYearStart] = useState(searchParams.get('year_start') || undefined);
  const [yearEnd, setYearEnd] = useState(searchParams.get('yearEnd') || undefined);
  const [genres, setGenres] = useState(searchParams.get('genres') || undefined);
  const [author, setAuthor] = useState(searchParams.get('author') || undefined);
  const [skip, setSkip] = useState(+(searchParams.get('skip') || 0));
  const limit = 20;

  const [manga, setManga]: any[] = useState([]);

  useEffect(() => {
    getMangaList(
      { skip, limit },
      { search, year_end: yearEnd ? +yearEnd : undefined, year_start: yearStart ? +yearStart : undefined, genres: genres ? [genres] : [], author }
    ).then((res) => {
      console.log('SEARCH', res.data);
      setManga(res.data.docs);
    });
  }, [param]);

  return (
    <>
      <BigTilesWrap>
        {manga.map((e) => (
          <BigTile title={e.title} _id={e._id} preview={e.preview}></BigTile>
        ))}
      </BigTilesWrap>
    </>
  );
}
