import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Navbar,
  List,
  Register,
  Login,
  Edition,
  FavoritesList,
  NotFound,
  Arena,
  LogoutContainer,
} from "./components/subpages";

function RouterApp() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <List />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <List />
            </>
          }
        />
        <Route
          path="/arena"
          element={
            <>
              <Arena />
            </>
          }
        />
        <Route
          path="/favorites"
          element={
            <>
              <FavoritesList />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path="/edition"
          element={
            <>
              <Edition />
            </>
          }
        />
        <Route
          path="/logout"
          element={
            <>
              <LogoutContainer>Zostales wylogowany</LogoutContainer>
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <NotFound />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default RouterApp;
