import "../css/Login.css"
import { useState } from "react";
import UserSignIn from "./UserSignIn";
import ProviderSign from "./ProviderSignIn";
import { useParams } from "react-router-dom";
function SignIn() {
   
    const { itemId, otherParam } = route.params;
    console.log("dsa",otherParam);
    if (otherParam) {
        return (
            <>

                <UserSignIn />
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