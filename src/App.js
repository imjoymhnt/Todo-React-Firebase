import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["Eat", "Sleep", "Code", "Repeat"]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    // set the input to the todos Array
    e.preventDefault(); //preventing to refresh the page when submitting
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello world</h1>
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onClick={addTodo}>
          Add
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
