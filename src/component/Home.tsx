import {useNavigate} from "react-router-dom";
import {getAuth, signOut} from "firebase/auth";
import React from "react";


export function Home() {
    const auth = getAuth();
    const navigate = useNavigate();
    const logOut = async () => {
        signOut(auth)
            .then(() => {
                console.log("Succesfuly sign out")
                navigate("/login");
            }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <>
            <h1>Welcome to our home page</h1>
            <p>You're now connected</p>
            <button onClick={() => logOut()}>
                LogOut
            </button>
        </>
    );
}