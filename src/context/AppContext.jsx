import { createContext, useState } from "react";
import { useEffect } from "react";

export const AppContext = createContext();

/* eslint-disable-next-line */
export const AppContextProvider = ({ children }) => {
  // ------------- isDarkTheme ----------------

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
    localStorage.setItem("isDarkTheme", isDarkTheme);
  };

  // --------------- IsLogin ------------------------------------

  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const isLoginFromLocalStorage = localStorage.getItem("isLogin");
    if (isLoginFromLocalStorage) {
      trueLogin();
      console.log("isLogin", isLogin);
    }
  }, [isLogin]);

  const trueLogin = () => {
    setIsLogin(true);
  };
  const falseLogin = () => {
    setIsLogin(false);
  };
  // ----------workshopBody---------------------------------------

  const [workshopBody, setWorkshopBody] = useState(null);

  const addPokemonToWorkshop = (pokemon) => {
    setWorkshopBody(pokemon);
  };
  const clearWorkshopBody = () => {
    setWorkshopBody(null);
  };
  console.log("workshopBody:", workshopBody);

  // ------------------------------------------------------------
  const [newPokemonsTable, setNewPokemonsTable] = useState([]);
  const actualityPokemonsTable = (newTable) => {
    setNewPokemonsTable(newTable);
  };
  // ------------------------------------------------------------
  const [newFavoritesTable, setNewFavoritesTable] = useState([]);
  const actualityFavoritesTable = (newTable) => {
    setNewFavoritesTable(newTable);
  };
  // ------------------------------------------------------------

  const [blueCornerPokemon, setBlueCornerPokemon] = useState(null);
  const addToCornerBlue = (pokemon) => {
    setBlueCornerPokemon(pokemon);
  };
  const clearCornerBlue = () => {
    setBlueCornerPokemon(null);
  };
  const [redCornerPokemon, setRedCornerPokemon] = useState(null);
  const addToCornerRed = (pokemon) => {
    setRedCornerPokemon(pokemon);
  };
  const clearCornerRed = () => {
    setRedCornerPokemon(null);
  };

  // ------------------------------------------------------------
  return (
    <AppContext.Provider
      value={{
        clearCornerBlue,
        clearCornerRed,
        addToCornerBlue,
        addToCornerRed,
        blueCornerPokemon,
        redCornerPokemon,
        newFavoritesTable,
        actualityFavoritesTable,
        isDarkTheme,
        toggleTheme,
        isLogin,
        falseLogin,
        trueLogin,
        addPokemonToWorkshop,
        clearWorkshopBody,
        workshopBody,
        newPokemonsTable,
        actualityPokemonsTable,
      }}>
      {children}
    </AppContext.Provider>
  );
};
