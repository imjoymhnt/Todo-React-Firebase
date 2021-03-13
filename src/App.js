import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { FaCheck } from "react-icons/fa";
import Todo from "./Todo";
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
      <h1>Todo List</h1>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">
            Write a Todo <FaCheck />
          </InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
