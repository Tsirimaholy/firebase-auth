import {Link} from "react-router-dom";

export function Home() {
    return (
        <>
            <h1>Home page</h1>
            // todo: implement logout
            <Link to={"/login"}>LogOut</Link>
        </>
    );
}