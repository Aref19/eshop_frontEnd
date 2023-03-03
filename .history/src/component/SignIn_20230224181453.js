import "../css/Login.css"
import { useState } from "react";
import UserSignIn from "./UserSignIn";
import ProviderSign from "./ProviderSignIn";
import roi
function SignIn() {
   
    const { itemId, otherParam } = route.params;
    console.log(itemId);
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