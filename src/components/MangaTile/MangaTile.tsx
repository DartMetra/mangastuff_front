import { Link } from 'react-router-dom';
import { API_URL } from '../../services';
import { Div, TileCaption, TileContainer, TileImage, ImageText } from './style';

export function MangaTile({ title, preview, _id, text }: { title: string; preview: string; _id: string; text?: string }) {
  console.log(preview);
  return (
    <TileContainer>
      <Link to="/manga">
        <TileImage preview={API_URL + 'public/manga/preview/' + preview}>
          <ImageText>{text ? text : ''}</ImageText>
        </TileImage>
      </Link>

      <Div>
        {' '}
        <TileCaption to={'/manga/' + _id}>{title}</TileCaption>
      </Div>
    </TileContainer>
  );
}
