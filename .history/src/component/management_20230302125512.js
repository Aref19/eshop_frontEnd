import axios from 'axios';


function management() {
    const [title, settitle] = useState("");
    const [title, settitle] = useState("");
    const [title, settitle] = useState("");
    const [title, settitle] = useState("");
    const [title, settitle] = useState("");
    return (
        Card()
    )

}

function addItem(){

}

function Card() {
    const onSubmit = async (e) => {
        e.preventDefault();
         
    }

    return (
        <>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                    <h2>Add Item</h2>
                    <label htmlFor="exampleInputEmail1">titel</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter titel" />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">price</label>
                    <input type="text" className="form-control" placeholder="price" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">describtion</label>
                    <input type="text" className="form-control" placeholder="describtion" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">imageLink</label>
                    <input type="url" className="form-control" placeholder="imageLink" />
                </div>

                <button type="submit" className="btn btn-primary mt-5" >add item</button>
            </form>
        </>
    )
}

export default management;