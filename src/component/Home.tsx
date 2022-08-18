import {Link} from "react-router-dom";

export function Home() {
    return (
        <>
            <h1>Home page</h1>
            <Link to={"/login"}>Login</Link>
        </>
    );
}