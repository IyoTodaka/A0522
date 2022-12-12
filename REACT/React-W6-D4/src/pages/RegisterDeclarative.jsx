import React from "react";
import { Navigate } from "react-router-dom";

import Form from "../components/form/Form";

const Register = () => {
  const [toDashboard, setToDashBoard] = React.useState(false);

  if (toDashboard) {
    //should navigate to /dashboard (redirect)
    return <Navigate to="/dashboard" />
  }

  return (
    <div>
      <h1>Register</h1>
      <Form
        afterSubmit={(e) => {
          e.preventDefault();
          setToDashBoard(true);
        }}
      />
    </div>
  );
};

export default Register;
