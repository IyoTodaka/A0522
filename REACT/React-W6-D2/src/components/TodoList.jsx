import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ items }) => (
  <ul className="todo-list">
    {items.map((item) => (
      <TodoListItem item={item} key={item.id} />
    ))}
  </ul>
);

export default TodoList;
