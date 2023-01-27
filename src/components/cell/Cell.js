import React from 'react';
import classes from "./Cell.module.css"
function Cell({value,onClick}) {
    return (
        <div className={classes.cell} onClick={onClick}>
            <p>{value}</p>
        </div>
    );
}

export default Cell;