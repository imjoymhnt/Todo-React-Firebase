import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import "./Todo.css";

function Todo({ text }) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemText primary={text}></ListItemText>
      </ListItem>
    </List>
  );
}

export default Todo;
