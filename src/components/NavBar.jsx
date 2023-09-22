import PropTypes from "prop-types";

NavBar.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
};

function NavBar({ pokemonList, setPokemonIndex }) {
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