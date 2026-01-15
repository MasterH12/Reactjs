import React from "react";
import {ReactComponent  as DeleteIconSVG} from "./delete.svg";
import "./TodoIcon.css";

function DeleteIcon({onClick}) {
    return(
        <span
            className={`Icon Icon-svg Icon-delete`}
            onClick={onClick}
        >
            <DeleteIconSVG />
        </span>
    )
}

export {DeleteIcon}