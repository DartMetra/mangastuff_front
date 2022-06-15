import { useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { MangaDetailedPage } from './views/MangaDetailed/MangaDetailed';
import { MainPage } from './views/Main/MainPage';
import { LoginPage } from './views/Login/LoginPage';
import ReaderPage from './views/Reader/Reader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Catalog } from './views/Catalog/Catalog';
import { CreateManga } from './views/CreateManga/CreateManga';

function App() {
  const { store } = useContext(Context);
  console.log('APP', store.user);
  //f2f2f3
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/catalog" element={<Catalog></Catalog>}></Route>
        <Route path="/manga/create" element={<CreateManga></CreateManga>}></Route>
        <Route path="/manga/:id" element={<MangaDetailedPage></MangaDetailedPage>}></Route>
        <Route path="/manga/:id/chapter/c:chapter" element={<ReaderPage></ReaderPage>}></Route>
      </Routes>
    </>
  );
}
export default observer(App);
