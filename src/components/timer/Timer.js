import React, {useContext, useEffect} from 'react';
import DataContext from "../../State/data-context";
import classes from "./Timer.module.css"

function Timer() {
    const ctx = useContext(DataContext)
    useEffect(() => {
        ctx.handleStartCounter()
        return () => {
            ctx.handleStopCounter()
        }
    }, [])
    return (
        <div className={`${classes.timer} ${ctx.darkMode?classes.darkMode:""}`}>Timer: {ctx.count}</div>
    );
}

export default Timer;