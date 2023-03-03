import axios from 'axios';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    const login = useSelector((state) => state.login);
    console.log(login.access_token);
    const onSubmit = async (e) => {
        e.preventDefault();
        addItem();
         
    }

    function addItem(){
        const config = {
            headers: { Authorization: `Bearer ..LH1XtUuXfUinvJG6X9vCzd1GM4ZCml2eVmOWSIUz2zpQXeA8xg7COISQtpb-0O8wIFfIsXme1FhOcTzifJaSSl_9Kvc34vm5GBkBzfpPVXG7ijZISqsZr-gPftjTRQ5J9V91WCWpUU8ztARkSc9HdLKHSBVL6cR7K1QvZ2cZKPKqoHZA6hgROcMtINg99fJnTjgFI0AIEhMrkFr0TykzgUnYgXnvs70jGBljdS9t9O8oDh3Hmre03qDTcnO2u-tWq4_bNJzQdM7P657yj709tAF1aOUIuQe1xmOg-46nz_vdeCRDT6KhD3F9O_s8zynAd3aGGpYltKgG4MXiUgsOeQ` }
        };
        const apiUrl="http://localhost:8182/provider/addItems"
        const json = JSON.stringify({ 
            price: price ,
            title:title,
            desc:des,
            image:[
                {
                    url:imga
                }
            ]
            
        });
      const res= axios.post(
        apiUrl
        ,json,
        config
        );
      return res;
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
                    <input type="text" className="form-control" placeholder="price" onChange={(e)=>{setprice(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">describtion</label>
                    <input type="text" className="form-control" placeholder="describtion" onChange={(e)=>{setdes(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">imageLink</label>
                    <input type="text" className="form-control" placeholder="imageLink"  onChange={(e)=>{setimage(e.target.value)}}/>
                </div>

                <button type="submit" className="btn btn-primary mt-5" >add item</button>
            </form>
        </>
    )
}

export default management;