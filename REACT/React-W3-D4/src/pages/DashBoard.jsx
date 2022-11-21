import React from "react";
import { Link } from 'react-router-dom';

const DashBoard = ({ name }) => {
  return (
    <>
      <div>DashBoard</div>
      <p>Welcome, {name}</p>
      <hr />

      <Link to="/post/1">Link to POST ID 1</Link>

    </>
  );
};

export default DashBoard;
