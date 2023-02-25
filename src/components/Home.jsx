import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../ui/NavBar";
import TaskInput from "./Taskinput";
import Tasks from "./Tasks";

function Home(props) {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState({
    taskArray: [],
    loaded: false,
  });

  const fetchData = () => {
    fetch("https://todolist3-1.onrender.com/", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "Application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        if (!res.ok) navigate("/auth/login");
        else return res.json();
      })
      .then((data) => {
        setTasks({
          taskArray: data,
          loaded: true,
        });
      });
  };

  return (
    <Fragment>
      <NavBar />
      <TaskInput fetchData={fetchData} />
      <Tasks
        fetchData={fetchData}
        tasks={tasks}
        warningStatus={props.warningStatus}
        setWarning={props.setWarning}
      />
    </Fragment>
  );
}

export default Home;
