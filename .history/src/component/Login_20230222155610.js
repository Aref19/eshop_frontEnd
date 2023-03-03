import "../css/Login.css"


function Login() {
    return (
        <>
            <div className="log-content">
                <h1>Login</h1>
                <div className='log'>
                    <form >
                        <div className="firstInput">
                            <label htmlFor="fname">email:</label>
                            <input type="text" id="fname" name="fname" />
                        </div>
                        <div className="secoundInput">
                            <label htmlFor="lname">password:</label>
                            <input type="password" id="lname" name="lname" />
                        </div>

                        <div className="logButtoun"> Login</div>
                        <div className="regButtoun"> Regsiteren</div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login;