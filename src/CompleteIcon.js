import React from "react";
import {ReactComponent  as CheckIcon} from "./check.svg";
import "./TodoIcon.css";

function CompleteIcon({onClick, completed}) {
    return(
        <span
            className={`Icon Icon-svg Icon-check ${completed ? "Icon-check--active" : ""}`}
            onClick={onClick}
        >
            <CheckIcon />
        </span>
    )
}

export {CompleteIcon}