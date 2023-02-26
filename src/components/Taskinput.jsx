import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
const TaskInput = (props) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/?task=" + input, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "Application/x-www-form-urlencoded",
      },
    }).then(() => props.fetchData());
    setInput("");
  };
  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        name="taskInput"
        placeholder="What is on your mind?"
        className="task-input"
        value={input}
        type="text"
        onChange={handleInput}
        autoComplete="off"
        autoFocus
      />
      <Button className="my-3" onMouseDown={handleSubmit} variant="contained">
        {" "}
        <AddIcon />{" "}
      </Button>
    </form>
  );
};

export default TaskInput;
