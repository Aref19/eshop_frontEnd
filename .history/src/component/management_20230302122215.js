


function management() {

    return (
        <div className="container">
            <div className="row">
            <div className="col-3">
            {Card()}
         
            </div>
            <div className="col-3">
            {Card()}
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
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </>
    )
}

export default management;