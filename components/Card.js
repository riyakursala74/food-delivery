import { Link } from "react-router-dom";
const Card = (props) => {
  const { name, img, rating, cuisine } = props;
  return (
    <div className="w-64 border-2 border-gray-200 rounded-md p-8 mb-5 ml-0 hover:border-gray-400 mr-8">
      <h3 className="h-7 mb-2 truncate w-52 font-bold">{name}</h3>
      <Link to={"/restaurants/" + props.id}>
        <img className="w-48 h-44 rounded-md" src={img} alt="" />
      </Link>
      <p className="flex flex-wrap w-44 mb-2 break-all">{cuisine?.join(",")}</p>
      <h4>{rating}</h4>
    </div>
  );
};

export const NewCard = (Card) => {
  return (props) => {
    console.log("props received= ", props);
    return (
      <>
        <span className="absolute p-1 bg-blue-950 text-white rounded-sm">
          New
        </span>
        <Card
          key={props.id}
          name={props.name}
          img={props.img}
          rating={props.rating}
          cuisine={props.cuisine}
          id={props.id}
        />
      </>
    );
  };
};

export default Card;