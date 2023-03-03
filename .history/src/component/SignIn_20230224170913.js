import "../css/Login.css"
import { useState } from "react";
import UserSignIn from "./UserSignIn";
import ProviderSign from "./ProviderSignIn";
function SignIn(props) {



    if (props.otherParam) {
        return (
            <>
             <ProviderSign/>
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