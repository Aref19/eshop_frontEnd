


function management() {

    return (
        Card()

    )

}

function Card() {
    return (
        <>
            <form>
                <div className="form-group">
                    <h2>Add Item</h2>
                    <label for="exampleInputEmail1">titel</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter titel" />
                 
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">price</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="price" />
                </div>
                <div className="form-group">
                htmlFor                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="describtion" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">imageLink</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="imageLink" />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">add item</button>
            </form>
        </>
    )
}

export default management;