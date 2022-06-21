import { Link } from 'react-router-dom';
import { API_URL } from '../../services';
import { Div, TileCaption, TileContainer, TileImage, ImageText } from './style';

export function MangaTile({
  chapter,
  vol,
  title,
  preview,
  _id,
}: {
  chapter?;
  vol?;
  title: string;
  preview: string;
  _id: string;
}) {
  console.log(preview);

  return (
    <TileContainer>
      <Link to={chapter && vol ? `/manga/${_id}/chapter/c${chapter}` : `/manga/${_id}`}>
        <TileImage preview={API_URL + 'public/manga/preview/' + preview}>
          <ImageText>{chapter !== undefined && vol !== undefined ? `Том ${vol} Розділ ${chapter}` : ''}</ImageText>
        </TileImage>
      </Link>

      <Div>
        {' '}
        <TileCaption to={'/manga/' + _id}>{title}</TileCaption>
      </Div>
    </TileContainer>
  );
}
