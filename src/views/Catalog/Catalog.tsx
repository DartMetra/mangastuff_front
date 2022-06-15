import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { BigTile } from '../../components/BigTile/BigTile';
import { BigTilesWrap } from '../../components/BigTile/style';
import { Header } from '../../components/Header/Header';
import { getAuthorList } from '../../services/author.service';
import { getGenreList } from '../../services/genre.service';
import { getMangaList } from '../../services/manga.service';
import { Container, GenresWrap, SearchWrap, SInput, GenreWrap } from './style';

export function Catalog() {
  const param = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('search') || undefined);
  const [yearStart, setYearStart] = useState(searchParams.get('year_start') || undefined);
  const [yearEnd, setYearEnd] = useState(searchParams.get('year_end') || undefined);
  const [genres, setGenres] = useState(new Set(searchParams.getAll('genres')));
  const [author, setAuthor] = useState(searchParams.get('author') || undefined);
  const [skip, setSkip] = useState(+(searchParams.get('skip') || 0));
  const limit = 20;

  const [manga, setManga]: any[] = useState([]);
  const [genreList, setGenreList]: any[] = useState([]);
  const [authorList, setAuthorList]: any[] = useState([]);

  useEffect(() => {
    getMangaList(
      { skip, limit },
      {
        search,
        year_end: yearEnd ? +yearEnd : undefined,
        year_start: yearStart ? +yearStart : undefined,
        genres: Array.from(genres),
        author,
      }
    ).then((res) => {
      console.log('SEARCH', res.data);
      setManga(res.data.docs);
    });
    getGenreList({ skip: 0, limit: 99 }).then((res) => {
      setGenreList(res.data.docs);
    });
    getAuthorList({ skip: 0, limit: 99 }).then((res) => {
      setAuthorList(res.data.docs);
    });
  }, [searchParams]);

  function searchFunc() {
    const paramsArr: any[] = [];
    if (search) {
      paramsArr.push(['search', search]);
    }
    if (yearStart) {
      paramsArr.push(['year_start', yearStart]);
    }
    if (yearEnd) {
      paramsArr.push(['year_end', yearEnd]);
    }
    if (author) {
      paramsArr.push(['author', author]);
    }
    if (genres.size) {
      Array.from(genres).forEach((e) => paramsArr.push(['genres', e]));
    }

    setSearchParams(paramsArr);
  }

  function pushGenre(genre) {
    console.log('PRE', genres);
    if (genres.has(genre)) {
      genres.delete(genre);
    } else {
      genres.add(genre);
    }

    console.log('POST', genres);
  }

  return (
    <>
      <Header></Header>
      <Container>
        <BigTilesWrap>
          {manga.map((e) => (
            <BigTile title={e.title} _id={e._id} preview={e.preview}></BigTile>
          ))}
        </BigTilesWrap>
        <SearchWrap>
          <span>Пошук за назвою</span>
          <SInput placeholder="Пошук за назвою" onChange={(e) => setSearch(e.target.value)} value={search}></SInput>
          <span>Рік</span>
          <SInput
            type="number"
            min="1900"
            max={new Date().getFullYear()}
            placeholder="Рік від"
            onChange={(e) => setYearStart(e.target.value)}
            value={yearStart}
          ></SInput>
          <SInput
            type="number"
            min="1900"
            max={new Date().getFullYear()}
            placeholder="Рік до"
            onChange={(e) => setYearEnd(e.target.value)}
            value={yearEnd}
          ></SInput>
          <span>Автор</span>
          <select onChange={(e) => setAuthor(e.target.value)}>
            <option value=""> </option>
            {authorList.map((e) => (
              <option value={e._id}>{e.title}</option>
            ))}
          </select>
          <GenresWrap>
            <span>Жанри</span>{' '}
            {genreList.map((e) => (
              <GenreWrap>
                <SInput key={e._id} id={e._id} type="checkbox" value={e._id} onChange={() => pushGenre(e._id)}></SInput>
                <label htmlFor={e._id}>{e.title}</label>
              </GenreWrap>
            ))}
          </GenresWrap>
          <button onClick={searchFunc}>Пошук</button>
        </SearchWrap>
      </Container>
    </>
  );
}
