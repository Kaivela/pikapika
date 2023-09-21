function PokemonCard({name, imgSrc}) {
  return (
    <figure className="card">
      {imgSrc ? <img className="img" src={imgSrc} alt={name} /> : <p>???</p>}
      <figcaption className="name">{name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
