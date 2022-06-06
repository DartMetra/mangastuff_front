import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from ".";



function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("accessToken") && localStorage.getItem("refreshToken")) {
      store.checkAuth();
    }
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<></>}>        </Route>
        
      </Routes>
    </>
  );
}
export default observer(App);
