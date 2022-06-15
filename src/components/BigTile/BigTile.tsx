import { Link } from 'react-router-dom';
import { API_URL } from '../../services';
import { Div, ImageText, TileCaption, TileContainer, TileImage } from './style';

export function BigTile({ title, preview, _id }: { title: string; preview: string; _id: string }) {
  return (
    <TileContainer>
      <Link to={'/manga/' + _id}>
        <TileImage preview={API_URL + 'public/manga/preview/' + preview}>
          <ImageText>{title}</ImageText>
        </TileImage>
      </Link>
    </TileContainer>
  );
}
