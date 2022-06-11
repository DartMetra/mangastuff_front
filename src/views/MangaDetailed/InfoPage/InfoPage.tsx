import { Description, Tag, TagsWrap } from './style';
import { MangaTiles } from '../../../components/MangaTiles/MangaTiles';
import { useEffect, useState } from 'react';
import { getMangaSimilar } from '../../../services/manga.service';

export function InfoPage({ _id, description, genres }: { _id: string; description: string; genres: any[] }) {
  const [similar, setSimilar]: any[] = useState([]);

  useEffect(() => {
    console.log('asdfgh', _id);
    getMangaSimilar(_id as string).then((res) => {
      console.log(res.data);
      setSimilar(res.data.docs);
    });
  }, []);

  return (
    <>
      <Description>{description || ''}</Description>
      <TagsWrap>
        {genres?.map((genre) => (
          <Tag to="/">{genre?.title}</Tag>
        ))}
      </TagsWrap>
      <MangaTiles caption="Similar" manga={similar}></MangaTiles>
    </>
  );
}
