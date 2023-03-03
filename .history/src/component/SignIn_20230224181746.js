import "../css/Login.css"
import { useState } from "react";
import UserSignIn from "./UserSignIn";
import ProviderSign from "./ProviderSignIn";
import { Route } from "react-router-dom";
function SignIn({ route, navigation }) {
   
    
    console.log(JSON.stringify(route.otherParam));
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