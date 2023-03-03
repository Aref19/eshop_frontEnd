import { useState } from "react";
import "../css/Login.css"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();



    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");



    const onClickSignIn = () => {

        navigate("/ProviderSign");

    }
    
    const userInfo=(e)=>{
     
    }

    const onSubmit = async (e) => {
        e.preventDefault();


    }

    const onChange = (e) => {
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
                        <input type={"password"} required onChange={(e)=> setPassword(e.target.value)}></input>
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