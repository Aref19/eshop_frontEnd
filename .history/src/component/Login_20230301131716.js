import { useState } from "react";
import "../css/Login.css"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();


    const [value, setValue] = useState(false);
    const [userLogin, setUserLogin]=useState



    const onClickSignIn = () => {
        if (value) {
            navigate("/ProviderSign");
        } else {
            navigate("/UserSignIn");
        }
    }

    return (
        <>
            <div className="center">
                <h1>Login</h1>
                <form method="post">
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
                    <input type={"submit"} value="login"></input>
                    <div className="provider">
                        <input type="checkbox" id="vehicle1" onChange={() => setValue(true)} />
                        <label htmlFor="vehicle1"> Provider</label>
                    </div>
                    <input type={"submit"} value="sign in" onClick={() => onClickSignIn()}></input>
                </form>

            </div>
        </>
    )
}

export default Login;