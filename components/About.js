import { useSelector } from "react-redux";
import { theme_config } from "../utils/themeColors";
import { FaRegSmile } from "react-icons/fa";
import { LINKEDIN_PROFILE } from "../utils/constants";

const About = () => {
  const theme = useSelector((store) => store.theme.mode);
  return (
    <div
      className={`${theme_config[theme].background} ${theme_config[theme].cardText} h-screen`}
    >
      <div className="flex pl-96 pt-24">
        <p className="mr-2">
          This website is developed by Riya, a full stack developer with UI
          specialization
        </p>
        <FaRegSmile className="mt-1" />
      </div>
      <div className="flex pl-96">
        Reach
        <div
          className="flex cursor-pointer text-blue-600"
          onClick={() => {
            window.open(LINKEDIN_PROFILE, "_blank").focus();
          }}
        >
          <p className="cursor-pointer bg-gray-700 ml-2 text-gray-500"></p>
          @LinkedIn
        </div>
      </div>
    </div>
  );
};

export default About;
