import React, { useState, useRef, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { format, formatDistance } from "date-fns";

const Todo = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("todolist")
      .select("*")
      .order("timestamp", { ascending: false });

    if (error) console.error("Error: ", error);
    else setData(data);
    setLoading(false);
  };

  const addItems = async (item) => {
    const { data, error } = await supabase
      .from("todolist")
      .insert({ text: item.text })
      .select(); //if you need the values returned

    if (error) console.error("Error: ", error);
    else setData((prev) => [data[0], ...prev]);
  };

  return (
    <div className="content">
      <div className="title">
        <span>[React]</span> Todo
      </div>
      <div className="todo">
        <TodoInput add={addItems} />
        {loading && <h3>Loading...</h3>}
        {!loading && data && <TodoList items={data} />}
      </div>
    </div>
  );
};

export default Todo;

const TodoList = ({ items }) => {
  const list = items.map((item) => {
    return <TodoListItem key={item.id} item={item} />;
  });

  return <ul className="todo-list">{list}</ul>;
};

const TodoListItem = ({ item }) => {
  // const timestamp = format(new Date(item.timestamp), "MMM d 'AT' h:mm a")
  const timestamp = formatDistance(new Date(item.timestamp), new Date(), {
    addSuffix: true
  });
  return (
    <li>
      <div className="info">
        <div>{item.text}</div>
        <div className="time">{timestamp}</div>
      </div>
      <i className="close">×</i>
    </li>
  );
};

const TodoInput = ({ add }) => {
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();

    const input = inputRef.current;

    if (input.value) {
      const dataToAdd = {
        text: input.value
      };

      add(dataToAdd);
      input.value = "";
    }
  };

  return (
    <form className="form-todo" onSubmit={onSubmit}>
      <div className="form-title">Add new item:</div>
      <div className="form-container">
        <input ref={inputRef} type="text" placeholder="Type something..." />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
