import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import TextField from "@mui/material/TextField";

import { AppContext } from "../../context/AppContext";
import useGetPokemons from "../../hooks/useGetPokemons";

import { Card, PokemonDetailsModal } from "../shared";

const VITE_NEWPOKEMONS = import.meta.env.VITE_NEWPOKEMONS;

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

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 150px;
    font-size: 16px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 120px;
    font-size: 14px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 80px;
    font-size: 14px;
  }
`;

const Pagination = styled.div`
  width: 100%;
  height: 70px;
  background-color: transparent;
  display: flex;
  justify-content: space-around;
`;

const CustomTextField = styled(TextField)`
  && {
    width: 300px;
    height: 50px;
    font-size: 18px;
    caret-color: #000;
  }

  && input {
    caret-color: #000;
    color: #d8bfd8;
  }

  fieldset {
    border-color: #d8bfd8;
    border-width: 3px;
    border-radius: 8px;
  }

  label {
    color: #d8bfd8;
  }

  &:focus-within label {
    color: green;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    && {
      width: 200px;
    }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    && {
      width: 150px;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    && {
      width: 130px;
    }
  }
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

const List = () => {
  const { newPokemonsTable, actualityPokemonsTable } = useContext(AppContext);
  const [allPokemons, setAllPokemons] = useState([]);
  const { pokemons } = useGetPokemons();

  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // ----------------------------------------------------------------

  const filteredPokemons = searchTerm
    ? allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allPokemons;

  // ----------------------------------------------------------------

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPokemonPage = filteredPokemons.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  // ----------------------------------------------------------------

  const handleCardClick = (pokemon) => {
    const selectedPokemonWithImageURL = {
      ...pokemon,
      imageURL: pokemon.sprites?.front_default || pokemon.imageURL,
    };
    setSelectedPokemon(selectedPokemonWithImageURL);
  };
  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };
  // ----------------------------------------------------------------

  useEffect(() => {
    axios
      .get(VITE_NEWPOKEMONS)
      .then((response) => {
        const newPokemons = response.data;
        console.log("newPokemons:", newPokemons);

        if (pokemons) {
          setAllPokemons([...pokemons, ...newPokemons]);
        } else {
          setAllPokemons([...newPokemons]);
        }
      })
      .catch((error) => {
        console.error("Błąd odczytu nowych pokemonów:", error);
      });
  }, [actualityPokemonsTable, newPokemonsTable, pokemons]);

  return (
    <Container>
      <Pagination>
        <Prev_Next onClick={handlePrevPage} disabled={currentPage === 1}>
          P R E V
        </Prev_Next>
        <PageNumber>{currentPage}</PageNumber>
        <Prev_Next
          onClick={handleNextPage}
          disabled={endIndex >= allPokemons.length}>
          N E X T
        </Prev_Next>
      </Pagination>
      <CustomTextField
        label="Wprowadź nazwę pokemona"
        variant="outlined"
        onChange={handleInputChange}
        value={searchTerm}
      />
      {selectedPokemon && (
        <PokemonDetailsModal
          pokemon={selectedPokemon}
          onClose={handleCloseModal}
        />
      )}
      <CardContainer>
        {pokemons &&
          currentPokemonPage.map((pokemon, index) => {
            const imageURL = pokemon.sprites?.front_default || pokemon.imageURL;
            const abilities =
              typeof pokemon.abilities === "string"
                ? pokemon.abilities
                : pokemon.abilities[0];

            return (
              <Card
                onClick={() => handleCardClick(pokemon)}
                key={pokemon.id}
                name={pokemon.name}
                weight={pokemon.weight}
                height={pokemon.height}
                base_experience={pokemon.base_experience}
                abilities={abilities}
                imageURL={imageURL}
              />
            );
          })}
      </CardContainer>
    </Container>
  );
};
export default List;
