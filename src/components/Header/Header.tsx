import { HeaderWrap, HeaderInput, HeaderAuthContainer, HeaderLabel, HeaderLink, HeaderProfile } from './style';
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
        <HeaderInput type="text" placeholder="Search" />
      </div>
      <HeaderAuthContainer>
        {store?.isAuth ? (
          <HeaderProfile>
            <img width={36} height={36} src={store.user.picture} alt="" />
            <button
              onClick={async () => {
                await store?.logout();
                navigate('/login');
              }}
            >
              LOGOUT
            </button>
          </HeaderProfile>
        ) : (
          <>
            <HeaderLink to="/login">Login</HeaderLink>
          </>
        )}
      </HeaderAuthContainer>
    </HeaderWrap>
  );
}
