import React, { useState } from "react";

var lineThrough = false;


const LineThroughToggleText = (props)=>{
    const handleInput = (e)=> {
        props.setEditValue(e.target.value);
    }
    const lineThroughStyle = {
        textDecoration : props.cross ? "line-through" : "none"
    }
    const setLineThrough = (e)=> {
        fetch(`http://127.0.0.1:8393/?taskId=${e}&cross=${!lineThrough}`,{
            method : "PATCH",
            credentials : "include",
            headers : {
                'Content-Type' : 'Application/x-www-form-urlencoded'
            },
        }).then(res=>{props.fetchData();console.log(res)} );
        lineThrough = !lineThrough;
    }
    return props.editState ? <input placeholder="newValue" value={props.editValue} type="text" onChange={handleInput} autofocus></input> : (
    <h2 className="col-lg-7 col-md-7 py-1" 
        style={lineThroughStyle}  
        onClick={()=>setLineThrough(props._id)}> {props.task} </h2>
    )
}

export default LineThroughToggleText