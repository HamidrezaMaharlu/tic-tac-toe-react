import React, {useContext} from 'react';
import User from "../user/User";
import classes from "./Header.module.css"
import DataContext from "../../State/data-context";
import Button from "../button/Button";

function Header() {
    const ctx = useContext(DataContext)
    return (
        <div>
            <div className={classes.headerContainer}>
                <div className={classes.userContainer}>
                    {!ctx.showBoard && <User label="Name of first player" usernameVal={ctx.firstPlayer.name}
                                             selectVal={ctx.firstPlayer.side}
                                             usernameName="firstPlayerName" selectName="firstPlayerSelect"
                                             onChange={ctx.handleChangeInput}
                                             options={ctx.firstPlayer.options}/>}
                    {!ctx.showBoard && <User label="Name of second player" usernameVal={ctx.secondPlayer.name}
                                             selectVal={ctx.secondPlayer.side}
                                             usernameName="secondPlayerName" selectName="secondPlayerSelect"
                                             onChange={ctx.handleChangeInput}
                                             options={ctx.secondPlayer.options}/>}
                </div>
                {!ctx.showBoard && <Button className={classes.btn} disabled={!ctx.isValid} onClick={ctx.handleClickStart}>Start</Button>}
            </div>
            <div className={classes.headerContainer}>
            {ctx.showBoard && <p className={ctx.darkMode?classes.darkMode:""}> First Player name is :{ctx.firstPlayer.name} and select {ctx.firstPlayer.side}</p>}
            {ctx.showBoard && <p className={ctx.darkMode?classes.darkMode:""}> Second Player name is :{ctx.secondPlayer.name} and select {ctx.secondPlayer.side}</p>}
            </div>
            </div>

    );
}

export default Header;