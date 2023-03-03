import { useState } from "react";
import "../css/Login.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from "react-redux";
import loginSlice from "../slice/lgin-slice";


function Login() {
    const navigate = useNavigate();
    const apiUrl = "http://localhost:8182/auth/token";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch=useDispatch();

    const logInEmailPassword = (e,p) => {
        const params = new URLSearchParams();
        params.append('client_id', 'eshop_backend');
        params.append('client_secret', 'C4MHtNVAt2cd3upSOjJ6fen4xVUCrUwP');
        params.append('grant_type', 'password');
        params.append('username',e);
        params.append('password',p);
        console.log(password);
        axios.post(apiUrl, params).then((data) => console.log(data.data.access_token)) 

    }

    const onClickSignIn = () => {

        navigate("/ProviderSign");

    }

    const onSubmit = async (e) => {
        e.preventDefault();
        //logInEmailPassword(email,password);
        dispatch(loginSlice(email,password));

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