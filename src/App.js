import { useStore } from "./store/Store";
import "./App.css";
import { useEffect } from "react";
import { FilterInput } from "./components/FilterInput";
import { PokemonTable } from "./components/PokemonTable";

const POKEMON_URL =
  "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/0658aeff401d196dece7ec6fe6c726c6adc1cc00/gistfile1.txt";

const App = () => {
  const setPokemon = useStore((state) => state.setPokemon);

  useEffect(() => {
    fetch(POKEMON_URL)
      .then((resp) => resp.json())
      .then((pokemon) => setPokemon(pokemon));
  }, []);

  return (
    <div className="App">
      <div>
        <FilterInput />
      </div>
      <h1>List of Pokemons</h1>
      <PokemonTable />
    </div>
  );
};

export default App;
