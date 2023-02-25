import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Warning from "../ui/warning";
import ToggleAndEditButton from "./ToggleAndEditButton";

var triggeredTaskId;

const Tasks = (props) => {
  const tasks = props.tasks;

  const triggerWarning = (e) => {
    props.setWarning(true);
    triggeredTaskId = e.target.id;
  };

  const deleteTask = (taskId) => {
    fetch("https://todolist3-1.onrender.com/?taskId=" + taskId, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "Application/x-www-form-urlencoded",
      },
    }).then((res) => {
      console.log(res);
      props.fetchData();
    });
  };
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <div>
      {props.warningStatus && (
        <Warning
          warningText="Are you sure to delete this item?"
          warningStatus={props.warningStatus}
          setWarning={props.setWarning}
          ok={() => {
            deleteTask(triggeredTaskId);
          }}
        />
      )}
      {!tasks.loaded ? (
        <Stack alignItems="center">
          <CircularProgress />
        </Stack>
      ) : (
        tasks.taskArray.map((each) => {
          return (
            <div className="each-task row" key={each._id}>
              <ToggleAndEditButton
                task={each.task}
                _id={each._id}
                cross={each.cross}
                fetchData={props.fetchData}
                date={each.date}
              />
              <Button
                className="col-lg-1 col-md-2 py-1"
                id={each._id}
                onClick={triggerWarning}
              >
                <DeleteIcon />
              </Button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Tasks;
