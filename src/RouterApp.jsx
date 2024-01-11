import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/subpages/Navbar";
import List from "./components/subpages/List";
import Register from "./components/subpages/Register";
import Login from "./components/subpages/Login";
import Edition from "./components/subpages/Edition";
import FavoritesList from "./components/subpages/FavoritesList";
import NotFound from "./components/subpages/NotFound";
import Arena from "./components/subpages/Arena";
import TemporaryContainer from "./components/shared/TemporaryContainer";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <List />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <List />
            </>
          }
        />
        <Route
          path="/arena"
          element={
            <>
              <Navbar />
              <Arena />
            </>
          }
        />
        <Route
          path="/favorites"
          element={
            <>
              <Navbar />
              <FavoritesList />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Navbar />
              <Register />
            </>
          }
        />
        <Route
          path="/edition"
          element={
            <>
              <Navbar />
              <Edition />
            </>
          }
        />
        <Route
          path="/logout"
          element={
            <>
              <Navbar />
              <TemporaryContainer>Zostales wylogowany</TemporaryContainer>
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <NotFound />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default RouterApp;
