import { useState } from "react";
import PokedexLogo from "./components/PokedexLogo";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];
const pokemon = pokemonList[0];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <PokedexLogo />
      </div>
      <div>
        <PokemonCard  {...pokemon} />
      </div>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
