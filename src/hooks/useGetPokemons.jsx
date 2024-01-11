import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getPokemons = async () => {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"
  );
  const detailedPokemons = await Promise.all(
    data.results.map(async (pokemon) => {
      const response = await axios.get(pokemon.url);
      const abilities = response.data.abilities.map(
        (ability) => ability.ability.name
      );
      return { ...response.data, abilities };
    })
  );

  return detailedPokemons;
};

const useGetPokemons = () => {
  const { data: pokemons } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
  });

  return { pokemons };
};
export default useGetPokemons;
