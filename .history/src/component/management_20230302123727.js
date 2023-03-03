


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
                    <label htmlFor="exampleInputEmail1">titel</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter titel" />
                 
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">price</label>
                    <input type="text" className="form-control"  placeholder="price" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">describtion</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="describtion" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">imageLink</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="imageLink" />
                </div>
              
                <button type="submit" className="btn btn-primary m-t-5">add item</button>
            </form>
        </>
    )
}

export default management;