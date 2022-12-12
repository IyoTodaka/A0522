import React from "react";
import { useRouteError } from "react-router-dom";
import NavList from "../components/navigation/NavList";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <NavList />
      <h1 className="text-1xl font-bold tracking-tight sm:text-center sm:text-6xl my-5">
        An error has occurred!
      </h1>
      <p className="text-2xl text-center">{error.data}</p>
    </div>
  );
};

export default ErrorPage;
