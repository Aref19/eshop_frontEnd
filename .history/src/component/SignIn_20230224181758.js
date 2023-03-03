import "../css/Login.css"
import { useState } from "react";
import UserSignIn from "./UserSignIn";
import ProviderSign from "./ProviderSignIn";
import { Route } from "react-router-dom";
function SignIn({ route, navigation }) {
   
    const { itemId, otherParam } = route.params;
    console.log(""JSON.stringify(otherParam));
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