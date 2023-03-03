import "../css/Login.css"
import { useState } from "react";
import UserSignIn from "./UserSignIn";
import ProviderSign from "./ProviderSignIn";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function SignIn() {

    if (otherParam) {
        return (
            <>

            
            </>
        )
    } else {
        return (
            <>
                <ProviderSign />
            </>
        )
    }

}

export default SignIn;