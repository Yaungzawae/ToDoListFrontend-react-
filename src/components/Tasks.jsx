import React, {useEffect, useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Warning from "../ui/warning";
import LineThroughToggleText from "./LineThroughToggle";
import EditButton from "./EditButton";
import ToggleAndEditButton from "./ToggleAndEditButton";

var triggeredTaskId;




const Tasks = (props)=>{
    const tasks = props.tasks;

    const [editState, setEditState] = useState(false)

    const triggerWarning = (e)=>{
        props.setWarning(true);
        triggeredTaskId = e.target.id;
    }

    const [editValue , setEditValue] = useState("")
    
    const deleteTask = (taskId)=>{
        fetch("http://127.0.0.1:8393/?taskId=" + taskId,{
            method : "DELETE",
            credentials : "include",
            headers : {
                'Content-Type' : 'Application/x-www-form-urlencoded'
            },
        }).then(res=>{
            console.log(res);
            props.fetchData();
        });
    }
    useEffect( ()=> {
        props.fetchData()
    }, [])
    return <div>
          {props.warningStatus && <Warning warningText="Are you sure to delete this item?" 
                                        warningStatus={props.warningStatus}
                                        setWarning={props.setWarning}
                                        ok={()=>{deleteTask(triggeredTaskId)}}
                                        />}
                {!tasks.loaded ? <p>loading</p> : tasks.taskArray.map((each)=>{
            return <div className="each-task row" key={each._id}>
            <ToggleAndEditButton task={each.task} 
                                        _id={each._id} 
                                        cross={each.cross} 
                                        fetchData={props.fetchData}
                                        date={each.date} />
                {/* <LineThroughToggleText task={each.task} 
                                        _id={each._id} 
                                        cross={each.cross} 
                                        fetchData={props.fetchData}
                                        editState={editState}
                                        editValue={editValue}
                                        setEditValue={setEditValue}>
                </LineThroughToggleText>
                <p className="col-lg-2 col-md-2 py-1">{each.date}</p>
                <EditButton editState={editState} setEditState={setEditState} editValue={editValue} setEditValue={setEditValue} _id={each._id} fetchData={props.fetchData} ></EditButton> */}
                <Button className="col-lg-1 col-md-2 py-1" id={each._id} onClick={triggerWarning} ><DeleteIcon /></Button> 
            </div>
        })}
    </div>
}

export default Tasks;