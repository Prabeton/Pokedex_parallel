import { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
import TextField from "@mui/material/TextField";

import useGetPokemons from "../../hooks/useGetPokemons";
import Card from "../shared/Card";
import PokemonDetailsModal from "../shared/PokemonDetailsModal";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
  margin-top: 60px;
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

const Prev = styled.button`
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
const Next = styled(Prev)``;

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
`;

const List = () => {
  const { newPokemonsTable, actualityPokemonsTable } = useContext(AppContext);
  const [allPokemons, setAllPokemons] = useState([]);
  const { pokemons } = useGetPokemons();

  useEffect(() => {
    axios
      .get("http://localhost:3002/newPokemons")
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

  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

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

  return (
    <Container>
      <Pagination>
        <Prev onClick={handlePrevPage} disabled={currentPage === 1}>
          P R E V
        </Prev>
        <CustomTextField
          label="Wprowadź nazwę pokemona"
          variant="outlined"
          onChange={handleInputChange}
          value={searchTerm}
        />
        <Next
          onClick={handleNextPage}
          disabled={endIndex >= allPokemons.length}>
          N E X T
        </Next>
      </Pagination>
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
