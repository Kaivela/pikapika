import PropTypes from "prop-types";

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  color: PropTypes.string,
};

function PokemonCard({ name, imgSrc, color }) {
  const cardStyle = { "--glow-color": color };
  return (
    <figure className="PokemonCard" style={cardStyle}>
      {imgSrc ? <img className="img" src={imgSrc} alt={name} /> : <p>???</p>}
      <figcaption className="name">{name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
