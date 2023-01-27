import React, {useContext} from 'react';
import Cell from "../cell/Cell";
import DataContext from "../../State/data-context";
import styles from "./Board.module.css"

function Board() {
    const ctx = useContext(DataContext)
    const renderCell = i => <Cell onClick={() => ctx.handleClickCell(i)} value={ctx.board[i]}/>
    return (
        <div className={styles.container}>
            <div className={styles.board__Container}>
                {renderCell(0)}
                {renderCell(1)}
                {renderCell(2)}
                {renderCell(3)}
                {renderCell(4)}
                {renderCell(5)}
                {renderCell(6)}
                {renderCell(7)}
                {renderCell(8)}
            </div>
        </div>
    );
}

export default Board;