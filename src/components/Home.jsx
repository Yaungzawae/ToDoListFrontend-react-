import React, {Fragment, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Warning from "../ui/warning.jsx";
import NavBar from "../ui/NavBar";
import TaskInput from "./Taskinput";
import Tasks from "./Tasks";
import api from "../api.js";


function Home(props){
   const navigate = useNavigate()
    const [tasks , setTasks] = useState({
        taskArray : [],
        loaded : false
    })

    const fetchData = ()=> {
        fetch("https://todolist3-1.onrender.com/",{
            method : "GET",
            credentials : "include",
            headers : {
                'Content-Type' : 'Application/x-www-form-urlencoded'
            },
        }).then(res=>{
            console.log(res)
            if (!res.ok) navigate("/auth/login")
            else return res.json()
        }).then(data => {
            console.log(data);
            setTasks({
                taskArray : data,
                loaded : true
            })
        })
    }
    // const fetchData = async() =>{
    //     const response = await api.get("/").then(function(response){
    //         console.log(response.response.data)
    //     }).catch(function(err){
    //         console.log(err)
    //     })
    //     console.log(response)
    // }
        
    return <Fragment>
        <NavBar/>
        <TaskInput fetchData={fetchData} />
        <Tasks fetchData={fetchData} tasks={tasks}  warningStatus={props.warningStatus} setWarning={props.setWarning}/>
    </Fragment>
}

export default Home;