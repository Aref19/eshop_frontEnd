import "../css/Login.css"
import { useState } from "react";
import UserSignIn from "./UserSignIn";
import ProviderSign from "./ProviderSignIn";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function SignIn(props) {

    const otherParam = navigation.getParam('otherParam', 'some default value');
    
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