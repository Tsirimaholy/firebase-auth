import React, {useState} from "react";
import Input from "./Input";
import "./style/FormStyle.css";
import {getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";
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

    // todo: add github icon to sign in after
    const signInWithGithub = async () => {
        setAuthing(true);
        signInWithPopup(auth, new GithubAuthProvider()).then((response) => {
            console.log(response.user.uid);
            navigate("/login");
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <div className="form__container">
                <div className="signin_option__container">
                    <div className="signin_option__title">
                        <h2>SignIn Option</h2>
                    </div>
                    <ul>
                        <li className={"gmail"}>GMail</li>
                        <li className={"github"}>GitHub</li>
                        <li className={"facebook"}>Facebook</li>
                    </ul>
                </div>
                <form action="" className="form">
                    <Input id="username" label="Username" type="text"/>
                    <Input id="password" label="Password" type="password"/>
                    <input type="submit" value="Log In" style={{marginRight: "2em"}}/>
                    {/*<strong >OR</strong>*/}
                    <input type="submit"
                           onClick={() => signInWithGoogle()}
                           disabled={authing}
                           value={"use mail"}/>
                </form>
            </div>
        </div>
    );
}

export default Login;