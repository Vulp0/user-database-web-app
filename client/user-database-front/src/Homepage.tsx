import { Link } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
    return(
        <div id="HomepageContent">
            <h1>Database management web app</h1>
            <p>Full CRUD functionality through a web front</p>
            <span>
                <Link to={""}>Get started</Link>
                <Link to={""}>Sign In</Link>
            </span>
        </div>
    )
}

export default Homepage;