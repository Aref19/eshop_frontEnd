import "../css/Login.css"


function Login() {
    return (
        <>
            <div className="center">
                <h1>Login</h1>
                <form method="post">
                    <div className="txt_field">
                        <input type={Text} required></input>
                        <span></span>
                        <label>UserEmail</label>

                    </div>
                    <div className="txt_field">
                        <input type={"password"} required></input>
                        <span></span>
                        <label>password</label>

                    </div>
                    <input type={"submit"} value="login"></input>
                    <div>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label>
                                  <input type={"submit"} value="sign in"></input>
                    </div>
          
                </form>

            </div>

        </>
    )
}

export default Login;