import PropTypes from "prop-types";

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
};

function NavBar({ pokemonIndex, setPokemonIndex }) {
  const incrementIndex = () => setPokemonIndex(pokemonIndex + 1);
  const decrementIndex = () => setPokemonIndex(pokemonIndex - 1);
  return (
    <>
      {pokemonIndex > 0 && <button onClick={decrementIndex}>Previous</button>}
      {pokemonIndex < 4 && <button onClick={incrementIndex}>Next</button>}
    </>
  );
}

export default NavBar;
