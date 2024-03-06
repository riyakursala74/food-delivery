const Card = (props) => {
  const { name, img, rating, cuisine } = props;
  return (
    <div className="card">
      <h3 className="card-header">{name}</h3>
      <img className="card-image" src={img} alt="" />
      <h5 className="cuisine">{cuisine}</h5>
      <h4>{rating}</h4>
    </div>
  );
};

export default Card;
