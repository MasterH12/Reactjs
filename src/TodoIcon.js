import React from "react";
import {ReactComponent  as CheckIcon} from "./icons/check.svg";
import {ReactComponent  as DeleteIcon} from "./icons/delete.svg";

function TodoIcon({type, completed, onClick}) {
    return (
        <span
            className={`Icon icon-${type}}`}
            onClick={onClick}
        >
            <CheckIcon />
        </span>
    )
}
export {TodoIcon}