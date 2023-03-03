import "../css/Login.css"


function Login(){
    return(
        <>
        <form>
            <div className="input">
                <label>email</label>
                <input type={Text}></input>
                <label>Password</label>
                <input type={Text}></input>
                <button>anmelden</button>
            </div>
        </form>
        
        </>
    )
}

export default Login;