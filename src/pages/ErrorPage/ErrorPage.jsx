import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <img src="/error.png" alt="error image" />
      </div>

      <div className="mt-2 md:mt-24">
        <h2 className="text-4xl text-yellow-300">Page Not Found</h2>
        <p className="text-2xl">Status code: {status || 404}</p>
        <p className="text-2xl">
        <span className="text-red-400">Error Message:</span>  {error?.message}
        </p>
        <Link to="/">
          <button className="btn btn-outline btn-accent ">Back Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
