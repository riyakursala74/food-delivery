import Card from "./Card";
import { resData } from "../utils/mockData";

const ContainerMenu = () => {
  imgSrc =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div className="container-menu">
      <div>Search</div>
      <div className="card-container">
        {resData.map((res) => {
          key = res.info.id;
          info = res.info;
          return (
            <Card
              name={info.name}
              img={imgSrc + info.cloudinaryImageId}
              rating={info.avgRating}
              cuisine={info.cuisines}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContainerMenu;
