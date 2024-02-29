import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header-main">
      <div>
        <img className="imgClass" src={LOGO_URL} alt="flogo" />
      </div>
      <ul className="header-links">
        <li className="li-item">Home</li>
        <li className="li-item">About</li>
      </ul>
    </div>
  );
};

export default Header;
