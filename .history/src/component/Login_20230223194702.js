import "../css/Login.css"


function Login() {
    return (
        <>
            <div className="cener">
                <h1>Login</h1>
                <form method="post">
                    <div className="txt_field">
                        <input type={Text} required></input>
                        <label>UserEmail</label>

                    </div>
                    <div className="txt_field">
                        <input type={"password"} required></input>
                        <label>password</label>

                    </div>
                    <input type={"submit"}></input>

                </form>

            </div>

        </>
    )
}

export default Login;