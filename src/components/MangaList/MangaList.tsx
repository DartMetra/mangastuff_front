import { ListItem } from '../ListItem/ListItem';
import { ListWrap } from './style';

export function MangaList({
  manga,
}: {
  manga: { originalTitle: string; title: string; preview: string; _id: string }[];
}) {
  return (
    <ListWrap>
      {manga?.map((e) => (
        <ListItem title={e.title} originalTitle={e.originalTitle} _id={e._id} preview={e.preview}></ListItem>
      ))}
    </ListWrap>
  );
}
