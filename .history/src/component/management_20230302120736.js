


function management() {

    return (
        <>
           <div className="center">
                <h1>Login</h1>
                <form method="post" onSubmit={(e) => onSubmit(e)}>
                    <div className="txt_field">
                        <input type="text" required onChange={(e) => setEmail(e.target.value)}></input>
                        <span></span>
                        <label>UserEmail</label>
                    </div>
                    <div className="txt_field">
                        <input type={"password"} required onChange={(e) => setPassword(e.target.value)}></input>
                        <span></span>
                        <label>password</label>
                    </div>
                    <input type={"submit"} value="login Provider"></input>
                    <input type={"submit"} value="sign in Provider" onClick={() => onClickSignIn()}></input>
                </form>

            </div>

        </>




    )

}

function Card() {
    return (
        <>
            <div className="card" style="width: 18rem;">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Admin</p>
                </div>
            </div>
        </>
    )
}

export default management;