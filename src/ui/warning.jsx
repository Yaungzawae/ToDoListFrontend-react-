import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./warning.module.css"
import Button from '@mui/material/Button';


const BackDrop = ()=>{
    return createPortal(<div className={classes.backdrop}></div>,document.querySelector("#backdrop"))
}

const Modal = (props)=>{
    const cancel = ()=> {
        props.setWarning(false)
    }
    const ok = ()=>{
        cancel();
        props.ok();
    }
    return createPortal(<div className={classes.warning}>
        <h2 className="col-12 py-5">{props.warningText}</h2>
        <div className="button-parent">
        <Button className="" onClick={cancel} variant="contained" color="error"> Cancel </Button>
        <Button className="" onClick={ok} variant="contained" color="success"> Continue </Button>
        </div>
    </div>,document.querySelector("#warning"))
}

const Warning = (props)=>{
    return(
        <Fragment>
            <BackDrop/>
            <Modal  warningText={props.warningText} 
                    warningStatus={props.warningStatus}
                    setWarning={props.setWarning}
                    ok={props.ok}/>
        </Fragment>
    )
}

export default Warning;