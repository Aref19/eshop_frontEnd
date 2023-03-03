import "../css/Login.css"


function Login() {
    return (
        <>
            <div className="log-content">
                <h1>Login</h1>
                <div className='log'>
                    <form onSubmit={formSubmit}>
                        <label htmlFor="fname">email:</label>
                        <input type="text" id="fname" name="fname"  /><br></br>
                        <label htmlFor="lname">password:</label>
                        <input type="password" id="lname" name="lname" onChange={(e) => setPassword(e.target.value)} /><br></br>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login;