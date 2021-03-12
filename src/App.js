import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["Eat", "Sleep", "Code", "Repeat"]);
  return (
    <div className="App">
      <h1>Hello world</h1>
      <input type="text" />
      <button>Add</button>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
