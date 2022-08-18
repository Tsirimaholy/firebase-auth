import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <h1>This page do not exist. </h1>
            <Link to={"/login"}>navigate to home page</Link>
        </>
    )
}

export default NotFound;