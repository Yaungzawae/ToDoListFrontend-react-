import React from "react"
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

const EditButton = (props)=>{
    const updateTask = ()=> {
        fetch(`http://127.0.0.1:8393/?taskId=${props._id}&task=${props.editValue}&cross=false`,{
            method : "PATCH",
            credentials : "include",
            headers : {
                'Content-Type' : 'Application/x-www-form-urlencoded'
            },
        }).then(res=>{props.fetchData();props.setEditValue("");console.log(res)} );
    }

    const changeEditState = ()=>{
        props.setEditState(!props.editState)
    }
    const submitUpdate = ()=>{
        updateTask();
        changeEditState();
    }
    return props.editState ?  <Button className="col-lg-1 col-md-2 py-1" onClick={submitUpdate}><CheckIcon /></Button> : <Button className="col-lg-1 col-md-2 py-1" onClick={changeEditState}><EditIcon/></Button>
}

export default EditButton