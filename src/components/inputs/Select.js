import React from "react";
import classes from "./select.module.css"

const Select = ({ name, label, options,value, ...rest }) => {
    return (
        <div className={classes.selectContainer}>
            <label htmlFor={name}>{label}</label>
            <select value={value} name={name} id={name} {...rest} className="form-control">
                <option value="" />
                {options.map(option => (
                    <option key={option._id} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;