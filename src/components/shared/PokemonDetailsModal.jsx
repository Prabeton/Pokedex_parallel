import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { useSnackbar } from "notistack";

import { AppContext } from "../../context/AppContext";

import { HeartIcon, CircleMechTwo, Axe } from "../../icons/svg";

const VITE_FAVORITES = import.meta.env.VITE_FAVORITES;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000080;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 800px;
  height: 600px;
  background-color: #1666dd7f;
  border: 4px solid #16d816;
  border-radius: 30px;
  margin: 30px 0;
  position: relative;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 650px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    max-width: 400px;
    flex-direction: column;
    gap: 20px;
    height: auto;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 270px;
    flex-direction: column;
    gap: 20px;
    height: auto;
  }
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border: 3px solid #16d816;
  margin-top: 12px;
  border-radius: 8px;
`;

const Name = styled.div`
  width: 300px;
  height: 30px;
  border: 3px solid #16d816;
  border-radius: 8px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  font-size: 22px;
  color: #00ff00;
  font-weight: 600;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #00ff00;
  gap: 10px;
`;

const Proper = styled.div`
  width: 300px;
  height: 40px;
  border: 3px solid #16d816;
  border-radius: 8px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10px;
  font-size: 18px;
  font-family: "Pokemon-Hollow", sans-serif;
  color: #00ff00;
  font-weight: 600;
  padding: 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #16d816;

  &:hover {
    color: #e3b10e;
  }
  &:active {
    font-family: "Pokemon-Solid";
  }
`;
const ButtonFavorites = styled.button`
  width: 300px;
  height: 60px;
  border: 3px solid #16d816;
  border-radius: 30px;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
  color: #16d816;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Pokemon-Solid";

  &:hover {
    color: #e3b10e;
  }
  &:active {
    font-family: "Pokemon-Solid";
    border: 3px solid #e3b10e;
  }
  &:disabled {
    background-color: #000;
    color: #e40a07;
    border: 3px solid #e40a07;
  }
`;

const PokemonDetailsModal = ({ pokemon, onClose }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [isFavorites, setIsFavorites] = useState(false);
  const {
    isLogin,
    addPokemonToWorkshop,
    actualityFavoritesTable,
    addToCornerBlue,
    addToCornerRed,
    blueCornerPokemon,
    redCornerPokemon,
  } = useContext(AppContext);

  const abilitiesValue =
    typeof pokemon.abilities === "string"
      ? pokemon.abilities
      : pokemon.abilities[0];

  const pokemonToArena = {
    name: pokemon.name,
    weight: pokemon.weight,
    height: pokemon.height,
    base_experience: pokemon.base_experience,
    abilities: abilitiesValue,
    imageURL: pokemon.imageURL,
    id: pokemon.id,
  };

  const dataToSaveFavorites = {
    name: pokemon.name,
    weight: pokemon.weight,
    height: pokemon.height,
    base_experience: pokemon.base_experience,
    abilities: abilitiesValue,
    imageURL: pokemon.imageURL,
    id: pokemon.id,
  };

  const pokemonToWorkshop = {
    name: pokemon.name,
    weight: pokemon.weight,
    height: pokemon.height,
    base_experience: pokemon.base_experience,
    abilities: abilitiesValue,
    imageURL: pokemon.imageURL,
    id: pokemon.id,
  };

  const addToFavorites = () => {
    axios
      .post(VITE_FAVORITES, dataToSaveFavorites)
      .then((response) => {
        console.log("Dodano do ulubionych:", response.data);
        setIsFavorites(true);
      })
      .catch((error) => {
        console.error("Błąd dodawania do ulubionych:", error);
      });
    axios
      .get(VITE_FAVORITES)
      .then((updatedData) => {
        actualityFavoritesTable(updatedData);
      })
      .catch((error) => {
        console.error(
          "Błąd pobierania zaktualizowanej tablicy nowych pokemonów:",
          error
        );
      });
  };

  const removeFromFavorites = () => {
    axios
      .delete(`${VITE_FAVORITES}${pokemon.id}`)
      .then((response) => {
        console.log("Usunięto z ulubionych:", response.data);
        setIsFavorites(false);
        actualityFavoritesTable();
      })
      .catch((error) => {
        console.error("Błąd usuwania z ulubionych:", error);
      });
    axios
      .get(VITE_FAVORITES)
      .then((updatedData) => {
        actualityFavoritesTable(updatedData);
      })
      .catch((error) => {
        console.error(
          "Błąd pobierania zaktualizowanej tablicy nowych pokemonów:",
          error
        );
      });
  };

  const handleClickFavorites = () => {
    setIsFavorites(!isFavorites);
    if (!isFavorites) {
      addToFavorites(dataToSaveFavorites);
    } else {
      removeFromFavorites(pokemon.id);
    }
  };

  useEffect(() => {
    axios
      .get(VITE_FAVORITES)
      .then((response) => {
        const favorites = response.data;
        const isPokemonFavorite = favorites.some(
          (favorite) => favorite.id === pokemon.id
        );
        setIsFavorites(isPokemonFavorite);
      })
      .catch((error) => {
        console.error("Błąd odczytu ulubionych:", error);
      });
  }, [pokemon.id]);

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <Column>
          <Name>Name: {pokemon.name}</Name>
          <Img
            src={pokemon.imageURL || pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <Proper>weight: {pokemon.weight}</Proper>
          <Proper>height: {pokemon.height}</Proper>
          <Proper>base_expoerience: {pokemon.base_experience}</Proper>
          <Proper>abilities: {abilitiesValue}</Proper>
        </Column>
        <Column>
          <ButtonFavorites onClick={handleClickFavorites}>
            {isFavorites ? (
              <p>usun z ulubionych</p>
            ) : (
              <p>dodaj do ulubionych</p>
            )}
            <HeartIcon
              size={34}
              fill={isFavorites ? "#FF0000" : "#808080"}
              stroke="none"
            />
          </ButtonFavorites>
          <ButtonFavorites
            disabled={blueCornerPokemon && redCornerPokemon}
            onClick={() => {
              blueCornerPokemon
                ? addToCornerRed(pokemonToArena)
                : addToCornerBlue(pokemonToArena);
              enqueueSnackbar("Dodałeś pokemona do areny", {
                variant: "success",
              });
            }}>
            {blueCornerPokemon && redCornerPokemon ? (
              <p>arena jest pelna !</p>
            ) : (
              <p>dodaj do areny</p>
            )}
            <Axe size={34} fill={"#FF0000"} />
          </ButtonFavorites>
          {isLogin && (
            <ButtonFavorites
              onClick={() => {
                addPokemonToWorkshop(pokemonToWorkshop);
                enqueueSnackbar("Dodałeś pokemona do warsztatu", {
                  variant: "success",
                });
              }}>
              <p>dodaj do warsztatu</p>
              <CircleMechTwo size={34} fill="#00ff00" stroke="#00ff00" />
            </ButtonFavorites>
          )}
        </Column>
      </ModalContainer>
    </ModalOverlay>
  );
};
export default PokemonDetailsModal;
