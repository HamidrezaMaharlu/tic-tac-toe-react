import React from 'react';

import classes from './Modal.module.css';
import Button from "../button/Button";
import Card from "../card/Card";
import {createPortal} from "react-dom";

const ModalOverlay = (props) => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </div>
    );
};


const Modal = ({title,message,onConfirm}) => {
    return (
        <>
            {createPortal(<ModalOverlay title={title} message={message} onConfirm={onConfirm} />,document.getElementById("modal"))}
        </>
    );
};

export default Modal;

