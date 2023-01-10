import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";
import { GET_TODOS, ADD_TODO } from "../queries/todo.gql";

const Todo = () => {
  const { data, loading } = useQuery(GET_TODOS);
  const [addTodo] = useMutation(ADD_TODO);

  const addItem = async ({ text }) => {
    const data = await addTodo({
      variables: { text },
      refetchQueries: [{ query: GET_TODOS }]
    });
    console.log(data);
  };

  return (
    <div className="content">
      <div className="title">
        <span>[React]</span> Todo
      </div>
      <div className="todo">
        <TodoInput add={addItem} />

        {loading && <h3>Loading....</h3>}
        {!loading && data && <TodoList items={data.todolist} />}
      </div>
    </div>
  );
};

export default Todo;
