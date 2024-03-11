import { UP_ARROW, DOWN_ARROW } from "../utils/constants";

const ResItems = ({ title, menu, isOpen, setOpen }) => {
  const handleClick = () => {
    setOpen();
  };
  return (
    <div>
      <div onClick={handleClick}>
        <h1 className="p-2 border-2 border-gray-300 ml-10 w-11/12 font-bold bg-gray-100 ">
          {title}
          <span className="float-right">{isOpen ? DOWN_ARROW : UP_ARROW}</span>
        </h1>
      </div>
      <ul>
        {menu &&
          menu.map((item) => {
            const info = item?.card?.info;
            return (
              isOpen && (
                <li
                  key={info.id}
                  className="p-2 border-2 border-gray-200 ml-10 w-11/12"
                >
                  <span className="">{info.name}</span>
                  <br /> {info.description}
                </li>
              )
            );
          })}
      </ul>
    </div>
  );
};
export default ResItems;
