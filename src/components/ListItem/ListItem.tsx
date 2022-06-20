import { API_URL } from '../../services';
import { deleteFavorite } from '../../services/favorite.service';
import { ItemImg, ItemSubTitle, ItemTitle, ItemWrap, RemoveButton, TitleWrap } from './style';

export function ListItem({
  title,
  preview,
  _id,
  originalTitle,
}: {
  title: string;
  originalTitle: string;
  preview: string;
  _id: string;
}) {
  function remove() {
    deleteFavorite(_id);
  }
  return (
    <>
      <ItemWrap>
        <ItemImg src={API_URL + 'public/manga/preview/' + preview}></ItemImg>
        <TitleWrap>
          <ItemTitle to={'/manga/' + _id}>{title}</ItemTitle>

          <ItemSubTitle to={'/manga/' + _id}>{originalTitle}</ItemSubTitle>
        </TitleWrap>
        <RemoveButton onClick={remove}>Видалити</RemoveButton>
      </ItemWrap>
    </>
  );
}
