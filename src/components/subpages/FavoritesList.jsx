import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import { AppContext } from "../../context/AppContext";

import { Card, PokemonDetailsModal } from "../shared";

const VITE_FAVORITES = import.meta.env.VITE_FAVORITES;

const Container = styled.div`
  max-width: 1900px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
  margin-top: 60px;

  @media (min-width: 1721px) and (max-width: 1920px) {
    max-width: 1721px;
  }
  @media (min-width: 1441px) and (max-width: 1720px) {
    max-width: 1441px;
  }
  @media (min-width: 1281px) and (max-width: 1440px) {
    max-width: 1281px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    max-width: 1025px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 769px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    max-width: 481px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 320px;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 30px;
`;

const Prev_Next = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 8px;
  background-color: transparent;
  border: 3px solid #d8bfd8;
  font-family: "Pokemon-Hollow";
  font-size: 18px;
  font-weight: 800;
  color: #d8bfd8;
  padding-bottom: 10px;
  box-sizing: border-box;

  &:hover {
    border: 3px inset #aae30e;
  }
  &:active {
    border: 3px inset #ffff00;
    color: #ffff00;
  }
`;

const Pagination = styled.div`
  width: 100%;
  height: 70px;
  background-color: transparent;
  display: flex;
  justify-content: space-around;
`;

const PageNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 18px;
  color: #d8bfd8;
  border: 3px solid #d8bfd8;
  border-radius: 8px;
`;

function FavoritesList() {
  const itemsPerPage = 15;
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const { newFavoritesTable } = useContext(AppContext);
  useEffect(() => {
    axios
      .get(VITE_FAVORITES)
      .then((response) => {
        setFavorites(response.data);
      })
      .catch((error) => {
        console.error("Błąd pobierania ulubionych:", error);
      });
  }, [newFavoritesTable]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPokemonFavoritesPage = favorites.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };
  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <Container>
      <Pagination>
        <Prev_Next onClick={handlePrevPage} disabled={currentPage === 1}>
          P R E V
        </Prev_Next>
        <PageNumber>{currentPage}</PageNumber>
        <Prev_Next
          onClick={handleNextPage}
          disabled={endIndex >= favorites.length}>
          N E X T
        </Prev_Next>
      </Pagination>
      {selectedPokemon && (
        <PokemonDetailsModal
          pokemon={selectedPokemon}
          onClose={handleCloseModal}
        />
      )}
      {favorites.length > 0 ? (
        <CardContainer>
          {currentPokemonFavoritesPage.map((pokemon, index) => (
            <Card
              onClick={() => handleCardClick(pokemon)}
              key={pokemon.id}
              name={pokemon.name}
              weight={pokemon.weight}
              height={pokemon.height}
              base_experience={pokemon.base_experience}
              abilities={pokemon.abilities}
              imageURL={pokemon.imageURL}
            />
          ))}
        </CardContainer>
      ) : (
        <div>
          Tutaj beda widoczne karty ulubionych pokemonów jak tylko je dodasz.
        </div>
      )}
    </Container>
  );
}

export default FavoritesList;
