import "../css/Login.css"


function Login() {
    return (
        <>
            <div className="log-content">
                <h1>Login</h1>
                <div className='log'>
                    <form >
                        <div>
                            <label htmlFor="fname">email:</label>
                            <input type="text" id="fname" name="fname" />
                        </div>
                          <div>
                            
                          </div>
                        <label htmlFor="lname">password:</label>
                        <input type="password" id="lname" name="lname" /><br></br>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login;