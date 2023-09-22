import PropTypes from "prop-types";
import { useEffect } from "react";

NavBar.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
};

function NavBar({ pokemonIndex, pokemonList, setPokemonIndex }) {
  useEffect(() => {
    pokemonIndex === 3 && alert("pika pikachu !!! !");
  });

  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => setPokemonIndex(index)}>
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

export default NavBar;
