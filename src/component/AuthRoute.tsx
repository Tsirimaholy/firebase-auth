import {getAuth, onAuthStateChanged} from 'firebase/auth';
import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

export interface IAuthRoute {
    children: React.ReactNode
}

const AuthRoute: React.FC<IAuthRoute> = (props) => {
    const {children} = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const AuthCheck = onAuthStateChanged(auth, user => {
        if (user) {
            setLoading(false);
        } else {
            console.log("unauthorised user");
            navigate("/login")
        }
    })
    
    useEffect(() => {
        AuthCheck()
    }, [AuthCheck, auth]);


    if (loading) {
        return (<h1>Loading</h1>)
    }
    return (
        <div>{children}</div>
    );
}

export default AuthRoute;