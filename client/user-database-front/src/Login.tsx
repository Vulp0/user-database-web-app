import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "Yup";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
    const [loginStatusText, setLoginStatusText] = useState("");
    
    useEffect(() => {
        document.title = "Log in";
    });

    const initialVal = {
        Name: "",
        Email: ""
    };

    const schema = Yup.object().shape({
        Name: Yup.string().required("Field is required").min(3).max(50),
        Email: Yup.string().required("Field is required").email()
    });

    const attemptLogin = (submittedData: any) => {
        axios.post("http://localhost:3001/authenticatelogin", submittedData)
        .then((res) => {
            // console.log(res.data);
            res.data.authStatus ? setLoginStatusText("") : setLoginStatusText("Incorrect password and/or email");
        });
    }

    return (
        <Formik initialValues={initialVal} onSubmit={attemptLogin} validationSchema={schema}>
            <Form className="FormContainer p-3 border border-secondary rounded">
                <h1 className="mb-3">Log in to continue</h1>
                <span id="loginStatusText">{loginStatusText}</span>
                <div className="d-flex flex-column mb-2">
                    <label htmlFor="Name">*Name</label>
                    <ErrorMessage name="Name" component={"span"} />
                    <Field className="form-control" id="" name="Name" placeholder="Your full name" autoComplete="off"></Field>
                </div>

                <div className="d-flex flex-column mb-4">
                    <label htmlFor="Email">*Email</label>
                    <ErrorMessage name="Email" component={"span"} />
                    <Field className="form-control" id="" name="Email" placeholder="Your email address" autoComplete="off"></Field>
                </div>

                <div className="d-flex flex-row justify-content-between">
                    <button type="submit" className="btn btn-primary">Log in</button>
                    <Link className="text-reset btn btn-outline-secondary" to={"../signin"}>Don't have an account?</Link>
                </div>
            </Form>
        </Formik>
    )
}

export default Login;