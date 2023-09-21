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
const pokemon = pokemonList[1];

function PokemonCard() {
  return (
    <figure className="card">
      {pokemon.imgSrc ? <img className="img" src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
      <figcaption className="name">{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;