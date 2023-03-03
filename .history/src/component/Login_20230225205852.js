import { useState } from "react";
import "../css/Login.css"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [provider, setValueProvider] = useState([false]);
    const [user, setValueUser] = useState([false]);
    const [value, setValue] = useState(false);

    const onChangeAttribute = (value) => {
        if(provider){
            setValue(true)
        }else{
            setValue(false)
        }
    }

    const onClickSignIn = () => {
        console.log(value);
        navigate("/signIn",{
            itemId:100,
            otherParam:value
        });
    }

    return (
        <>
            <div className="center">
                <h1>Login</h1>
                <form method="post">
                    <div className="txt_field">
                        <input type={Text} required></input>
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
                        <input type="checkbox" id="vehicle1" onChange={() => onChangeAttribute("provider")} />
                        <label for="vehicle1"> Provider</label>
                        <div className="user">
                            <input type="checkbox" id="vehicle1" value="sign in" onChange={() => onChangeAttribute("user")} />
                            <label for="vehicle1"  > user</label>

                        </div>


                    </div>
                    <input type={"submit"} value="sign in" onClick={() => onClickSignIn()}></input>
                </form>

            </div>

        </>
    )
}

export default Login;