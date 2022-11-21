import React from "react";
import { useNavigate } from "react-router-dom";

import Form from "../components/form/Form";

const Register = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Register</h1>
      <Form
        afterSubmit={(e) => {
          e.preventDefault();
          navigate('/dashboard')
        }}
      />
    </div>
  );
};

export default Register;
