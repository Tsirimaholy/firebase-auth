import {InputProps} from "./InputProps";
import "./style/InputStyle.css"

function Input(props: InputProps):JSX.Element {
    const {label, id, type} = props;
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} autoFocus={id === "username"}/>
        </div>
    );
}

export default Input;