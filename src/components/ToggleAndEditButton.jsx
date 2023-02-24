import React, { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

var lineThrough = false;

const ToggleAndEditButton = (props) => {
  const [editState, setEditState] = useState(false);
  const [editValue, setEditValue] = useState(props.task);
  const handleInput = (e) => {
    setEditValue(e.target.value);
  };
  const lineThroughStyle = {
    textDecoration: props.cross ? "line-through" : "none",
  };
  const setLineThrough = (e) => {
    fetch(`https://todolist3-1.onrender.com/?taskId=${e}&cross=${!lineThrough}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "Application/x-www-form-urlencoded",
      },
    }).then((res) => {
      props.fetchData();
      console.log(res);
    });
    lineThrough = !lineThrough;
  };

  const updateTask = () => {
    fetch(
      `https://todolist3-1.onrender.com/?taskId=${props._id}&task=${editValue}&cross=false`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "Application/x-www-form-urlencoded",
        },
      }
    ).then((res) => {
      props.fetchData();
      setEditValue(props.task);
      console.log(res);
    });
  };

  const changeEditState = () => {
    setEditState(!editState);
  };
  const submitUpdate = () => {
    updateTask();
    changeEditState();
  };

  return (
    <Fragment>
      {editState ? (
        <input
          placeholder="newValue"
          value={editValue}
          type="text"
          onChange={handleInput}
          autofocus
        ></input>
      ) : (
        <h2
          className="col-lg-7 col-md-8 py-1"
          style={lineThroughStyle}
          onClick={() => setLineThrough(props._id)}
        >
          {props.task}
        </h2>
      )}
      <p className="col-lg-2 col-md-2 py-1">{props.date}</p>
      {editState ? (
        <Button className="col-lg-1 col-md-1 py-1" onClick={submitUpdate}>
          <CheckIcon />
        </Button>
      ) : (
        <Button className="col-lg-1 col-md-1 py-1" onClick={changeEditState}>
          <EditIcon />
        </Button>
      )}
    </Fragment>
  );
};

export default ToggleAndEditButton;
