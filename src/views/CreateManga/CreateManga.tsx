import { Header } from '../../components/Header/Header';
import { Btn, Container, FormInput, FormTextAr, FormWrap } from './style';
import { useState, useEffect } from 'react';
import { getGenreList } from '../../services/genre.service';
import { getAuthorList } from '../../services/author.service';
import { createManga } from '../../services/manga.service';
import { Navigate, useNavigate } from 'react-router-dom';
import { SOption, SSelect } from '../Catalog/style';

export function CreateManga() {
  const navigate = useNavigate();

  const [genresList, setGenresList]: any[] = useState([]);
  const [authorsList, setAuthorsList]: any[] = useState([]);

  const [title, setTitle]: any[] = useState();
  const [originalTitle, setOriginalTitle]: any[] = useState();
  const [preview, setPreview]: any[] = useState();
  const [banner, setBanner]: any[] = useState();
  const [authors, setAuthors]: any[] = useState();
  const [genres, setGenres]: any[] = useState();
  const [description, setDescription]: any[] = useState();
  const [year, setYear]: any[] = useState();

  useEffect(() => {
    getGenreList({ skip: 0, limit: 99 }).then((res) => {
      setGenresList(res.data.docs);
    });
    getAuthorList({ skip: 0, limit: 99 }).then((res) => {
      setAuthorsList(res.data.docs);
    });
  }, []);

  function submit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append('title', title);
    data.append('originalTitle', originalTitle);
    data.append('description', description);
    data.append('banner', banner);
    data.append('preview', preview);
    data.append('year', year);
    genres.map((e) => data.append('genres[]', e));
    authors.map((e) => data.append('author[]', e));
    createManga(data).then((res) => {
      navigate(`/manga/${res.data._id}`);
    });
  }

  return (
    <>
      <Header></Header>
      <Container>
        <FormWrap>
          Preview:
          <FormInput
            type="file"
            onChange={(
              e //@ts-ignore
            ) => setPreview(e?.target?.files[0])}
            required
          />
          Banner:{' '}
          <FormInput
            type="file"
            onChange={(
              e //@ts-ignore
            ) => setBanner(e?.target?.files[0])}
            required
          />
          Title:
          <FormInput type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
          OriginalTitle:
          <FormInput type="text" onChange={(e) => setOriginalTitle(e.target.value)} value={originalTitle} required />
          Description:{' '}
          <FormTextAr
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
            cols={10}
            rows={2}
          ></FormTextAr>
          Author:{' '}
          <SSelect
            onChange={(e) => {
              let options = e.target.options;
              let value: any[] = [];
              for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                  value.push(options[i].value);
                }
              }
              setAuthors(value);
            }}
            required
          >
            {authorsList.map((e) => (
              <SOption value={e._id}>{e.title}</SOption>
            ))}
          </SSelect>
          Genres:{' '}
          <SSelect
            onChange={(e) => {
              let options = e.target.options;
              let value: any[] = [];
              for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                  value.push(options[i].value);
                }
              }
              setGenres(value);
            }}
            multiple
            size={7}
            required
          >
            {genresList.map((e) => (
              <SOption value={e._id}>{e.title}</SOption>
            ))}
          </SSelect>
          Year:{' '}
          <FormInput
            required
            onChange={(e) => setYear(e.target.value)}
            type="number"
            min="1900"
            max={new Date().getFullYear()}
          />
          <Btn onClick={submit}>Створити</Btn>
        </FormWrap>
      </Container>
    </>
  );
}
