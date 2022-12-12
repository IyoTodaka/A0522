import React from "react";

const Form = ({ afterSubmit }) => {
  return (
    <form onSubmit={afterSubmit}>
      <div className="flex justify-center">
        <div>
          <div className="mb-3 xl:w-96">
            <input
              type="email"
              className={
                "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              }
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3 xl:w-96">
            <input
              type="password"
              className={
                "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white  focus:border-blue-600  focus:outline-none"
              }
              placeholder="Password"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
