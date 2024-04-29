import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const err = useRouteError();
  return (
    <div>
      <h2>Oops! It's not you!! Something went wrong</h2>
      <h3>
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};

export default PageNotFound;
