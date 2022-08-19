import React, {useState} from "react";
import "./style/InputStyle.css"
import "./style/FormStyle.css";
import "./IconStyle.css";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {BsGoogle, BsGithub, BsFacebook} from "react-icons/bs"
import {ChangeEvent} from "react";

const Login = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);

    const signInWithGoogle = async () => {
        setAuthing(true);
        signInWithPopup(auth, new GoogleAuthProvider())
            .then((response) => {
                console.log(response.user.uid);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                setAuthing(false);
            })
    }
    const sigIn = async (email: string, password: string) => {
        setAuthing(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setAuthing(false);
            });
    }
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div>
            <div className="form__container">
                <div className="signin_option__container">
                    <div className="signin_option__title">
                        <h2>SignIn Option</h2>
                    </div>
                    <div className={"option-container"}>
                        <div className={"gmail"} onClick={() => signInWithGoogle()}>
                            <BsGoogle size={"3em"}/>
                            <small>Google</small>
                        </div>
                        <div className={"github"}>
                            <BsGithub size={"3em"}/>
                            <small>GitHub</small>
                        </div>
                        <div className={"facebook"}>
                            <BsFacebook size={"3em"}/>
                            <small>Facebook</small>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" autoFocus
                               placeholder={"user@gmail.com"}
                               onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               id="password"
                               onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <input type="submit"
                           value="Log In"
                           style={{marginRight: "2em"}}
                           onClick={() => sigIn(email, password)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;