import { Link } from 'react-router-dom';
import { HeaderWrap, HeaderInput, HeaderAuthContainer, HeaderLabel, HeaderLink } from './style';

export function Header() {
  return (
    <HeaderWrap>
      <HeaderLink to="/">MangaStuff</HeaderLink>
      <div>
        <HeaderInput type="text" placeholder="Search" />
      </div>
      <HeaderAuthContainer>
        <HeaderLabel>Login</HeaderLabel>
        <HeaderLabel>Register</HeaderLabel>
      </HeaderAuthContainer>
    </HeaderWrap>
  );
}
