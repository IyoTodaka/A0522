import { addPath } from "graphql/jsutils/Path";
import React, { useRef } from "react";

const TodoInput = ({ add }) => {
  const inputRef = useRef();

  const submitHandler = (evt) => {
    evt.preventDefault();

    const input = inputRef.current

    if(input.value){
        const dataToAdd = {
            text: input.value
        }

        //submit to gql
        add(dataToAdd)
        input.value = ""
    }
  };

  return (
    <form className="form-todo" onSubmit={submitHandler}>
      <div className="form-title">Add new todo:</div>
      <div className="form-container">
        <input type="text" placeholder="Type something..." ref={inputRef} />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default TodoInput;
