import { useContext } from "react";
import { AppContext } from "./main";

const Todos = () => {
  const { state: todos } = useContext(AppContext);

  return (
    <ul>
      {todos.length > 0 &&
        todos.map((todo) => <li key={todo.id}>{todo.todoName}</li>)}
    </ul>
  );
};

export default Todos;
