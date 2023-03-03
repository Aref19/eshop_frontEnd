


function management() {

    return (
        <div className="container">
            <div className="row">
            <div className="col-3">
            {Card()}
         
            </div>
            <div className="col-3">
            {Card()}
           
            </div>
       
            </div>
        </div>
      
    )

}

function Card() {
    return (
        <>
            <div className="card" >
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Add Item</p>
                </div>
                <button>additem</button>
            </div>
        </>
    )
}

export default management;