import PropTypes from "prop-types";

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  color: PropTypes.string
};

function PokemonCard({ name, imgSrc, color }) {
  // const cardStyle = {
  //   filter: `drop-shadow(0 0 20px ${color})`,
  //   willChange: "filter",
  //   transition: "filter 300ms",
  // };
  // color ? <figure className="card" style={cardStyle}> : <figure className="card">
  return (
    <figure className={color}>
      {imgSrc ? <img className="img" src={imgSrc} alt={name}/> : <p>???</p>}
      <figcaption className="name">{name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
