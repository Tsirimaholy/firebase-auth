import React from "react";
import Input from "./Input";
import "./style/FormStyle.css";


function Login(): JSX.Element {
    return (
        <div>
            <div className="container">
                <form action="">
                    <Input id="username" label="Username" type="text"/>
                    <Input id="password" label="Password" type="password"/>
                    <input type="submit" value="Log In" style={{display: "inline", marginRight: "2em"}}/>
                    <small>
                        <a href="#">use mail</a>
                    </small>
                </form>
            </div>
        </div>
    );
}

export default Login;