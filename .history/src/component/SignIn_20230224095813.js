import "../css/Login.css"
import { useState } from "react";
function SignIn() {
   const [check,setState] =useState(false);

   const post=(e)=>{
    setState
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

                    <div className="txt_field">
                        <input type={"checkpassword"} required></input>
                        <span></span>
                        <label>password</label>

                    </div>
                    <label for="admin"> Admin</label>
                    <input type={"checkbox"} value="admin"  onChange={(e)=> setState(e.target.value)}></input>
                    <input type={"submit"} value="SginIn"></input>
                    if (check) {
                        
                    }
                    
                </form>

            </div>

        </>
    )
}

export default SignIn;