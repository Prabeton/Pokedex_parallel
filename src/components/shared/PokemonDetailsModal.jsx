import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Heart from "../../icons/svg/HeartIcon";
import CircleMechTwo from "../../icons/svg/CircleMechTwo";
import Topor from "../../icons/svg/Topor";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { getFromStorage, saveToStorage, LOCAL_STORAGE_KEYS } from '../../utils/localStorage';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 800px;
  height: 600px;
  background-color: rgba(22, 102, 221, 0.5);
  border: 4px solid #16d816;
  border-radius: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  position: relative;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
const ButtonArena = styled(ButtonFavorites)``;
const ButtonWorkshop = styled(ButtonFavorites)``;

/* eslint-disable */
const PokemonDetailsModal = ({ pokemon, onClose }) => {
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
    const currentFavorites = getFromStorage(LOCAL_STORAGE_KEYS.FAVORITES) || [];
    const updatedFavorites = [...currentFavorites, dataToSaveFavorites];
    saveToStorage(LOCAL_STORAGE_KEYS.FAVORITES, updatedFavorites);
    setIsFavorites(true);
    actualityFavoritesTable(updatedFavorites);
  };

  const removeFromFavorites = () => {
    const currentFavorites = getFromStorage(LOCAL_STORAGE_KEYS.FAVORITES) || [];
    const updatedFavorites = currentFavorites.filter(fav => fav.id !== pokemon.id);
    saveToStorage(LOCAL_STORAGE_KEYS.FAVORITES, updatedFavorites);
    setIsFavorites(false);
    actualityFavoritesTable(updatedFavorites);
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
    const favorites = getFromStorage(LOCAL_STORAGE_KEYS.FAVORITES) || [];
    const isPokemonFavorite = favorites.some(
      (favorite) => favorite.id === pokemon.id
    );
    setIsFavorites(isPokemonFavorite);
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
            <p>dodaj do ulubionych</p>
            <Heart
              size={34}
              fill={isFavorites ? "red" : "gray"}
              stroke="none"
            />
          </ButtonFavorites>
          <ButtonArena
            disabled={blueCornerPokemon && redCornerPokemon}
            onClick={() => {
              blueCornerPokemon
                ? addToCornerRed(pokemonToArena)
                : addToCornerBlue(pokemonToArena);
            }}>
            {blueCornerPokemon && redCornerPokemon ? (
              <p>arena jest pelna !</p>
            ) : (
              <p>dodaj do areny</p>
            )}
            <Topor size={34} fill={"red"} />
          </ButtonArena>
          {isLogin ? (
            <ButtonWorkshop
              onClick={() => addPokemonToWorkshop(pokemonToWorkshop)}>
              <p>dodaj do warszatu</p>
              <CircleMechTwo size={34} fill={"#00ff00"} stroke={"#00ff00"} />
            </ButtonWorkshop>
          ) : null}
        </Column>
      </ModalContainer>
    </ModalOverlay>
  );
};
export default PokemonDetailsModal;
