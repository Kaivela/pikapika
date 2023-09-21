function PokemonCard() {
  return (
    <figure className="card">
      <img
        className="img"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="bulbasaur"
      />
      <figcaption className="name">bulbasaur</figcaption>
    </figure>
  );
}

export default PokemonCard;
