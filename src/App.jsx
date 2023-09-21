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
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemon = pokemonList[pokemonIndex];
  const incrementIndex = () => {setPokemonIndex(pokemonIndex + 1);};
  const decrementIndex = () => {setPokemonIndex(pokemonIndex - 1);};
  return (
    <>
      <div>
        <PokedexLogo />
        <PokemonCard {...pokemon} />
        {pokemonIndex > 0 && <button onClick={decrementIndex}>Previous</button>}
        {pokemonIndex < 4 && <button onClick={incrementIndex}>Next</button>}
      </div>
    </>
  );
}



export default App;
