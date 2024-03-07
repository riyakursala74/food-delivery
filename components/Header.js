import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header-main">
      <div>
        <img className="imgClass" src={LOGO_URL} alt="flogo" />
      </div>
      <ul className="header-links">
        <li className="li-item">
          <Link to="/">Home</Link>
        </li>
        <li className="li-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
