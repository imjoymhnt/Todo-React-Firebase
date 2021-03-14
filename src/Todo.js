import React from "react";
import db from "./firebase";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import "./Todo.css";

function Todo({ text }) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemText primary={text.todo}></ListItemText>
      </ListItem>
      <Button onClick={(e) => db.collection("todos").doc(text.id).delete()}>
        Delete ME!
      </Button>
    </List>
  );
}

export default Todo;
