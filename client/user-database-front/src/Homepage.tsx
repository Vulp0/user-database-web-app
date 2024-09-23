import { Link } from "react-router-dom";
import { useEffect } from "react";

function Homepage() {
    useEffect(() => {
        document.title = "Homepage";
    });

    return(
        <div className="w-100 px-4">
            <h1>Database management web app</h1>
            <p>Full CRUD functionality through a web front</p>
            <span className="d-flex gap-3">
                <Link className="btn text-reset btn-primary" to={"signin"}>Get started</Link>
                <Link className="btn text-reset btn-outline-secondary" to={"login"}>Log In</Link>
            </span>
        </div>
    )
}

export default Homepage;