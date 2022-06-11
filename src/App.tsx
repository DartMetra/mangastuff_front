import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { MangaDetailedPage } from './views/MangaDetailed/MangaDetailed';
import { MainPage } from './views/Main/MainPage';

function App() {
  const { store } = useContext(Context);
  //f2f2f3
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/manga/:id" element={<MangaDetailedPage></MangaDetailedPage>}></Route>
      </Routes>
    </>
  );
}
export default observer(App);
