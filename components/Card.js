const Card = (props) => {
  const { name, img, rating, cuisine } = props;
  return (
    <div className="card">
      <h3 className="card-header">{name}</h3>
      <img className="card-image" src={img} alt="" />
      <h4>{rating}</h4>
      <h5>{cuisine}</h5>
    </div>
  );
};

export default Card;
