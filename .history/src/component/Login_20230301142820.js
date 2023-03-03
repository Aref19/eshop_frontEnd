import { useState } from "react";
import "../css/Login.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import qs

function Login() {
    const navigate = useNavigate();

    const apiUrl = "http://localhost:8182/auth/token";  
    const logIn=()=>{
        console.log(password);
        axios.post(apiUrl,{
              methode:"POST",
              headers: {
              
                'Content-Type': 'application/json'
              },
              body:{
                client_id:'eshop_backend',
                client_secret:'C4MHtNVAt2cd3upSOjJ6fen4xVUCrUwP',
                grant_type:'password',
                username:email,
                password:password
              }
            }).then((data) => data.json()).then((data) => console.log(data))
          
    }



    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");



    const onClickSignIn = () => {

        navigate("/ProviderSign");

    }
    
    const onSubmit = async (e) => {
        e.preventDefault();
        logIn();

    }

    const onChange = (e) => {
        e.preventDefault();
     
    
      }


    return (
        <>
            <div className="center">
                <h1>Login</h1>
                <form method="post" onSubmit={(e)=>onSubmit(e)}>
                    <div className="txt_field">
                        <input type="text" required  onChange={(e)=> setEmail(e.target.value)}></input>
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