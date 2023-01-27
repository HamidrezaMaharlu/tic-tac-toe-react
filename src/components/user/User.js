import React from 'react';
import Input from "../inputs/Input";
import Select from "../inputs/Select";
import Card from "../card/Card";
import classes from "./User.module.css"

function User({label, selectVal, usernameVal, usernameName, selectName,onChange,options}) {
    return (
        <Card className={classes.card}>
            <Input name={usernameName} label={label} type="text" value={usernameVal} onChange={onChange}/>
            <Select name={selectName} label="Select Your Side" options={options} value={selectVal} onChange={onChange}/>
        </Card>
    );
}

export default User;