import { useState } from "react";
import "../css/Login.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function Login() {
    console.log(pa);
    console.log(e);
    const navigate = useNavigate();

 

    const apiUrl = "http://localhost:8182/auth/token";
    const logIn = () => {
        console.log(password);
        axios.post(apiUrl, params).then((data) => console.log(data)) 

    }



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const onClickSignIn = () => {

        navigate("/ProviderSign");

    }

    const onSubmit = async (e) => {
        e.preventDefault();
        logIn(email,password);

    }

    const onChange = (e) => {
        e.preventDefault();


    }


    return (
        <>
            <div className="center">
                <h1>Login</h1>
                <form method="post" onSubmit={(e) => onSubmit(e)}>
                    <div className="txt_field">
                        <input type="text" required onChange={(e) => setEmail(e.target.value)}></input>
                        <span></span>
                        <label>UserEmail</label>
                    </div>
                    <div className="txt_field">
                        <input type={"password"} required onChange={(e) => setPassword(e.target.value)}></input>
                        <span></span>
                        <label>password</label>
                    </div>
                    <input type={"submit"} value="login Provider"></input>
                    <input type={"submit"} value="sign in Provider" onClick={() => onClickSignIn()}></input>
                </form>

            </div>
        </>
    )
}

export default Login;