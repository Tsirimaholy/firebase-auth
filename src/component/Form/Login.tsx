import React, {useState} from "react";
import Input from "./Input";
import "./style/FormStyle.css";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);
    const signInWithGoogle = async () => {
        setAuthing(true);
        signInWithPopup(auth, new GoogleAuthProvider()).then((response) => {
            console.log(response.user.uid);
            navigate("/login");
        }).catch(err => {
            console.log(err)
        })
    }

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