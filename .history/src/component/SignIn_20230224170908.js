import "../css/Login.css"
import { useState } from "react";
import UserSignIn from "./UserSignIn";
function SignIn(props) {



    if (props.otherParam) {
        return (
            <>
             <Pr
            </>
        )
    } else {
        return (
            <>
          <UserSignIn/>
            </>
        )
    }

}

export default SignIn;