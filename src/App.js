import './App.module.css';
import Header from "./components/header/Header";
import {useContext} from "react";
import DataContext from "./State/data-context";
import Board from "./components/board/Board";
import Timer from "./components/timer/Timer";
import Modal from "./components/Modal/Modal";
import DarkMode from "./components/darkmode/DarkMode";
import classes from "./App.module.css"

function App() {
    const ctx = useContext(DataContext)
    return (
        <div className={ctx.darkMode ? classes.darkMode : ""}>
            <div className={classes.container}>
                <Header/>
                {ctx.showBoard && <Board/>}
                {ctx.startCounter && <Timer/>}
                {ctx.showModal && <Modal onConfirm={ctx.handleCloseModal} message={ctx.modalMessage} title="Result"/>}
                <DarkMode/>
            </div>
        </div>
    );
}

export default App;
