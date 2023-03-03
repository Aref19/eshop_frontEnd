import "../css/Login.css"


function Login() {
    return (
        <>
            <div className="log-content">
                <h1>Login</h1>
                <div className='log'>
                    <form >
                        <label htmlFor="fname">email:</label>
                        <input type="text" id="fname" name="fname"  /><br></br>
                        <label htmlFor="lname">password:</label>
                        <input type="password" id="lname" name="lname" /><br></br>
                        <input type="submit" value="Submit" >login </input>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login;