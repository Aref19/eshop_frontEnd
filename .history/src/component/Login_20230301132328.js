import { useState } from "react";
import "../css/Login.css"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();



    const [userLogin, setUserLogin] = useState({});



    const onClickSignIn = () => {

        navigate("/ProviderSign");

    }
    
    const from

    const onSubmit = async (e) => {
        e.preventDefault();


    }


    return (
        <>
            <div className="center">
                <h1>Login</h1>
                <form method="post" onSubmit={onSubmit()}>
                    <div className="txt_field">
                        <input type="text" required></input>
                        <span></span>
                        <label>UserEmail</label>
                    </div>
                    <div className="txt_field">
                        <input type={"password"} required></input>
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