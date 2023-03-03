import axios from 'axios';
import { useState } from "react";

function management() {


    return (
        Card()
    )

}



function Card() {

    const [title, settitle] = useState("");
    const [des, setdes] = useState("");
    const [price, setprice] = useState("");
    const [imga, setimage] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
         
    }

    function addItem(){

    }

    return (
        <>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                    <h2>Add Item</h2>
                    <label htmlFor="exampleInputEmail1">titel</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter titel" onChange={(e)=>{settitle(e.target.value)}} />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">price</label>
                    <input type="text" className="form-control" placeholder="price" onChange={(e)=>{settitle(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">describtion</label>
                    <input type="text" className="form-control" placeholder="describtion" onChange={(e)=>{settitle(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">imageLink</label>
                    <input type="url" className="form-control" placeholder="imageLink"  onChange={(e)=>{settitle(e.target.value)}}/>
                </div>

                <button type="submit" className="btn btn-primary mt-5" >add item</button>
            </form>
        </>
    )
}

export default management;