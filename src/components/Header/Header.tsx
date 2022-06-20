import {
  HeaderWrap,
  HeaderInput,
  HeaderAuthContainer,
  HeaderLabel,
  HeaderLink,
  HeaderProfile,
  LogoutBtn,
} from './style';
import { useContext, useState } from 'react';
import { Context } from '../..';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const { store } = useContext(Context);
  const navigate = useNavigate();
  return (
    <HeaderWrap>
      <HeaderLink to="/">MangaStuff</HeaderLink>
      <div>
        <HeaderInput type="text" onClick={() => navigate('/catalog')} placeholder="Search" />
      </div>
      <HeaderAuthContainer>
        {store?.isAuth ? (
          <>
            <HeaderProfile>
              <HeaderLink to="/profile">
                {' '}
                <img width={36} height={36} src={store.user.picture} alt="" />
              </HeaderLink>
            </HeaderProfile>
            <LogoutBtn
              onClick={async () => {
                await store?.logout();
                navigate('/login');
              }}
            >
              <img width={20} height={25} src="img/exit.png" alt="" />
            </LogoutBtn>
          </>
        ) : (
          <>
            <HeaderLink to="/login">Login</HeaderLink>
          </>
        )}
      </HeaderAuthContainer>
    </HeaderWrap>
  );
}
