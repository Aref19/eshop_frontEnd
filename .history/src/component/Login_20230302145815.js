import { useState } from "react";
import "../css/Login.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { loginSliceF } from "../slice/lgin-slice";
import jwtDecode from "jwt-decode";


function Login() {
    const navigate = useNavigate();
    const apiUrl = "http://localhost:8182/auth/token";
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const login = useSelector((state) => state.login);


    const onClickSignIn = () => {
        navigate("/ProviderSign");
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        //logInEmailPassword(email,password);
        const data = { email, password };
        dispatch(loginSliceF({ email, password }));
        console.log("from logi ", login.access_token);
        if (!login.access_token == "") {
            navigate("/management");
        }




    }

    const onChange = (e) => {
        e.preventDefault();
    }

    const tokenExpired = () => {
        const token = jwtDecode(login.access_token);

        let currentDate = new Date();

        if (decodedToken.exp * 1000 < currentDate.getTime()) {
            console.log("Token expired.");
            return false;
        } else {
            console.log("Valid token");
            result = true;
        }
    }
    if (tokenExpired && typeof (login) !== 'undefined') {

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
    }else{
        return(
            <management/>
        )
    }




}

export default Login;