import "../css/Login.css"
import { useState } from "react";
import UserSignIn from "./UserSignIn";
import ProviderSign from "./ProviderSignIn";
import { useParams } from "react-router-dom";
function SignIn() {
   
    const { itemId, otherParam } = useParams();
    console.log("dsa",JSON.stringify(itemId));
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