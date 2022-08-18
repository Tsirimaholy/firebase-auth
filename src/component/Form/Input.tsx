import {InputProps} from "./InputProps";
import "./style/InputStyle.css"
import React from "react";

const Input: React.FC<InputProps> = props => {
    const {label, id, type} = props;
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} autoFocus={id === "username"}/>
        </div>
    );
};

export default Input;