import "../css/Login.css"


function Login() {
    return (
        <>
            <div className="log-content">
                <h1>Login</h1>
                <div className='log'>
                    <form >
                        <div className="firstInput">
                            <div className="email_lable">
                                <label htmlFor="fname">email:</label>
                            </div>
                            <div className="email_input">
                                <input type="text" id="fname" name="fname" />
                            </div>

                        </div>
                        <div className="secoundInput">
                        <div className="password_lable">
                        <label htmlFor="lname">password:</label>
                        </div>
                            <div className="">
                                   <input type="password" id="lname" name="lname" />
                            </div>
                         
                        </div>
                        <div className="buttons">
                            <div className="logButtoun"> <button>Login</button></div>
                            <div className="regButtoun"> <button>rgistieren</button></div>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Login;