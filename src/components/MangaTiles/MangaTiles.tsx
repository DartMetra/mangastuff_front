import { Link } from 'react-router-dom';
import { MangaTile } from '../MangaTile/MangaTile';
import { TilesContainer, TilesCaption } from './style';

export function MangaTiles({ caption, manga }: { caption; manga: { _id; preview; title }[] }) {
  return (
    <>
      <TilesCaption>{caption || ''}</TilesCaption>
      <TilesContainer>
        {manga?.map((e) => (
          <MangaTile title={e?.title} _id={e?._id} preview={e?.preview}></MangaTile>
        ))}
      </TilesContainer>
    </>
  );
}
