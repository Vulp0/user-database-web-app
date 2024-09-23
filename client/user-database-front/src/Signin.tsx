import { Link } from "react-router-dom";

function Signin() {
    return (
        <form className="FormContainer p-3 border border-secondary rounded">
            <h1 className="mb-3">Create an account</h1>
            
            <div className="d-flex flex-column mb-2">
                <label htmlFor="InputName">*Name</label>
                <input className="form-control" type="text" name="name" id="InputName" placeholder="Your full name" required />
            </div>
            <div className="d-flex flex-column mb-2">
                <label htmlFor="InputPosition">Position</label>
                <input className="form-control" type="text" name="position" id="InputPosition" placeholder="Your role in the company" />
            </div>
            <div className="d-flex flex-column mb-2">
                <label htmlFor="InputEmail">*Email</label>
                <input className="form-control" type="text" name="email" id="InputEmail" placeholder="Your email address" required />
            </div>

            <div className="d-flex flex-row justify-content-between">
                <input className="btn btn-primary" type="submit" value="Register" />
                <Link className="text-reset btn btn-outline-secondary" to={"../login"}>Already have an account?</Link>
            </div>
        </form>
    )
}

export default Signin;