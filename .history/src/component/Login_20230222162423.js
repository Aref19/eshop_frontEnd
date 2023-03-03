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
                            <div className="email_">

                            </div>
                            <input type="text" id="fname" name="fname" />
                        </div>
                        <div className="secoundInput">
                            <label htmlFor="lname">password:</label>
                            <input type="password" id="lname" name="lname" />
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