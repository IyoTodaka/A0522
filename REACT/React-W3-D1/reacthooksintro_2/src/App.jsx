import { useState, useContext } from "react";
import "./App.css";
import { AppContext } from "./main";
import Todos from "./Todos";

function App() {
  const [todoName, setTodoName] = useState("")
  const { state, dispatch } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: "ADD_TODO", payload: { todoName } })
    setTodoName("")
  }

 return(
  <>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="todoName" 
        value={todoName} 
        placeholder="Enter a todo"
        onChange={e => setTodoName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>

    <hr />
    <Todos />
  </>
 )
}

export default App;
