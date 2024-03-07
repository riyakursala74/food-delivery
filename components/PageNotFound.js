import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h2>Something went wrong</h2>
      <h3>
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};

export default PageNotFound;
