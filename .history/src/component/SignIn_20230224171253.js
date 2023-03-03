import "../css/Login.css"
import { useState } from "react";
import UserSignIn from "./UserSignIn";
import ProviderSign from "./ProviderSignIn";
function SignIn(props) {
   
    const { itemId, otherParam } = route.params;
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