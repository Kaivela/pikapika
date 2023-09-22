import PropTypes from "prop-types";
import { useEffect } from "react";

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
};

function NavBar({ pokemonIndex, setPokemonIndex }) {
  const incrementIndex = () => setPokemonIndex(pokemonIndex + 1);
  const decrementIndex = () => setPokemonIndex(pokemonIndex - 1);

  useEffect(() => {
    pokemonIndex === 3 && alert("pika pikachu !!! !");
  });

  return (
    <>
      {pokemonIndex > 0 && <button onClick={decrementIndex}>Previous</button>}
      {pokemonIndex < 4 && <button onClick={incrementIndex}>Next</button>}
    </>
  );
}

export default NavBar;
