import "../css/Login.css"

function UserSignIn() {
    return (
        <>
            <div className="center">
                <h1>Login</h1>
                <form method="post">
                    <div className="txt_field">
                        <input type="text" required></input>
                        <span></span>
                        <label>UserEmail</label>

                    </div>
                    <div className="txt_field">
                        <input type={"password"} required></input>
                        <span></span>
                        <label>password</label>

                    </div>

                    <div className="txt_field">
                        <input type={"checkpassword"} required></input>
                        <span></span>
                        <label>password</label>

                    </div>
                    <input type={"submit"} value="SginIn"></input>
                  
                    
                </form>

            </div>

        </>
    )
}

export default UserSignIn;