import { Link } from "react-router-dom";
import { theme_config } from "../utils/themeColors";
import { useSelector } from "react-redux";
const Card = (props) => {
  const { name, img, rating, cuisine, totalRating, costForTwo, areaName } =
    props;
  const cuisines = cuisine?.join(", ");
  const theme = useSelector((store) => store.theme.mode);
  return (
    <>
      <Link to={"/restaurants/" + props.id}>
        <div
          className={`${theme_config[theme].cardBorder} ${theme_config[theme].cardText} hidden md:block w-11/12 md:w-64 border-2 rounded-md md:p-8 mb-5 ml-0 hover:border-gray-400 md:mr-8 md:h-96 h-48`}
        >
          <h3 className="md:h-7 mb-2 truncate w-52 font-bold">{name}</h3>
          <img
            className="md:w-48 md:h-44 h-24 rounded-md right-0"
            src={img}
            alt=""
          />
          <p className="flex flex-wrap w-44 mb-2 break-all h-20 overflow-hidden">
            {cuisines}
          </p>
          <div className="flex justify-between">
            <div class="flex items-center">
              <svg
                class="w-4 h-4 text-yellow-300 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <div className="">
              {rating} ({totalRating})
            </div>
            <div>{costForTwo}</div>
          </div>
        </div>
      </Link>
      <Link to={"/restaurants/" + props.id}>
        <div
          className={`${theme_config[theme].cardBorder} ${theme_config[theme].cardText} block md:hidden w-11/12 border-2 rounded-md hover:border-gray-400 h-44 ml-2 mb-4`}
        >
          <div className="flex mt-2">
            <div>
              <img src={img} alt="" className="h-40 ml-2 rounded-md" />
            </div>
            <div className="ml-4">
              <div className="overflow-y-hidden w-48 h-6 font-bold mr-1">
                <h2>{name}</h2>
              </div>
              <p className="flex flex-wrap w-44 mb-2 break-all h-12 overflow-hidden text-sm italic mt-4">
                {cuisines}
              </p>
              <div className="flex">
                <div class="flex items-center mr-2">
                  <svg
                    class="w-4 h-4 text-yellow-300 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <div className="">
                  {rating} ({totalRating})
                </div>
              </div>
              <div>{costForTwo}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export const NewCard = (Card) => {
  return (props) => {
    return (
      <>
        <Card
          key={props.id}
          name={props.name}
          img={props.img}
          rating={props.rating}
          cuisine={props.cuisine}
          id={props.id}
          totalRating={props.totalRating}
          costForTwo={props.costForTwo}
          areaName={props.areaName}
        />
        <div className="relative h-0 w-0">
          <span className="absolute p-1 bg-blue-950 text-white rounded-sm md:right-8 right-6">
            New
          </span>
        </div>
      </>
    );
  };
};

export default Card;
