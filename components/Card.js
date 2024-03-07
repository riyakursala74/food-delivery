import { Link } from "react-router-dom";
const Card = (props) => {
  const { name, img, rating, cuisine } = props;
  return (
    <div className="card">
      <h3 className="card-header">{name}</h3>
      <Link to={"/restaurants/" + props.id}>
        <img className="card-image" src={img} alt="" />
      </Link>
      <h5 className="cuisine">{cuisine}</h5>
      <h4>{rating}</h4>
    </div>
  );
};

export default Card;
