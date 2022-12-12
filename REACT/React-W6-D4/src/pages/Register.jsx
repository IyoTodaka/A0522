import React from "react";
import { useNavigate } from "react-router-dom";

import Form from "../components/form/Form";

const Register = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl my-5">
        Register
      </h1>
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