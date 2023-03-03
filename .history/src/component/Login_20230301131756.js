import { useState } from "react";
import "../css/Login.css"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();


    const [value, setValue] = useState(false);
    const [userLogin, setUserLogin]=useState({});



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
                    <input type={"submit"} value="login Provider"></input>
                 
                    <input type={"submit"} value="sign in Provider" onClick={() => onClickSignIn()}></input>
                </form>

            </div>
        </>
    )
}

export default Login;