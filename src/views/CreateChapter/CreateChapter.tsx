import { Dispatch, SetStateAction, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { createChapter } from '../../services/chapter.service';
import { FormInput, FormWrap } from '../CreateManga/style';

export function CreateChapter() {
  const param = useParams();

  const navigate = useNavigate();

  const [volume, setVolume]: any[] = useState(0);
  const [chapter, setChapter]: any[] = useState(0);
  const [pages, setPages] = useState([]);

  function submit(e) {
    console.log('SUBMITED');
    e.preventDefault();
    const data = new FormData();
    data.append('chapter', chapter);
    data.append('volume', volume);
    data.append('manga', param.id as string);
    console.log(pages);
    //@ts-ignore
    for (const [key, value] of Object.entries(pages)) {
      data.append('pages[]', value);
    }

    createChapter(data).then((res) => {
      console.log(res.data);
      navigate(`/manga/${param.id}`);
    });
  }

  return (
    <>
      <Header></Header>
      <FormWrap>
        Том:
        <FormInput type="number" min={0} onChange={(e) => setVolume(e.target.value)} value={volume} required />
        Розділ:
        <FormInput type="number" min={0} onChange={(e) => setChapter(e.target.value)} value={chapter} required />
        Сторінки:
        <FormInput
          type="file"
          onChange={(
            e
            //ts-ignore
          ) => setPages(e.target.files as any)}
          multiple
          required
        />
        <button onClick={submit}>Створити</button>
      </FormWrap>
    </>
  );
}
