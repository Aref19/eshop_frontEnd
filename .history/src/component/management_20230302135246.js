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
    console.log("toke",login.access_token);
    const onSubmit = async (e) => {
        e.preventDefault();
        addItem();

    }

    function addItem() {
        const config = {
            maxBodyLength: Infinity,
            headers: {
                Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJnYU5rZHNWT25mb2VubTByNXZ4dk5qSlVCQzc1V09wSnA3aUlqUEUwSGtjIn0.eyJleHAiOjE2Nzc3NjE1OTEsImlhdCI6MTY3Nzc2MTUzMSwianRpIjoiNzkwMDgxNDctMjkxMS00M2VmLTkwMjYtNjFlN2IzNGI0NDA5IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL21hc3RlciIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI2ZmY0Y2U0Zi05OGFlLTQ0Y2ItYTYwZS00OTNhZmMyMDBkZDIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJlc2hvcF9iYWNrZW5kIiwic2Vzc2lvbl9zdGF0ZSI6IjUzNmU1YzRlLWRjZjktNDRiZS1hNzZiLWM0OTllYWI4Y2E3MyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1tYXN0ZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiZXNob3BfYmFja2VuZCI6eyJyb2xlcyI6WyJwcm92aWRlciIsImFkbWluIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI1MzZlNWM0ZS1kY2Y5LTQ0YmUtYTc2Yi1jNDk5ZWFiOGNhNzMiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJhZG1pbkBnbWFpbC5jb20gYWRtaW5AZ21haWwuY29tIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW5AZ21haWwuY29tIiwiZ2l2ZW5fbmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImZhbWlseV9uYW1lIjoiYWRtaW5AZ21haWwuY29tIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20ifQ.KSLEsBsu81QWZGncBE2kL4ApCltKxq7i1iepDzpdZ3DDIEk_gN-XTcNYidvmj8dmWZM5OHKvG2hhVYeASJHwtXhaSME-yZ-ZiSUGpCuhJtkxp6Fxpd1Hi_wcpzP-6GQxgYMf4BEfN7u2nGcTQia97LMCkTLS1oLaOdHWR23lKLQ0ZDIb2ubls_suYloRMAO37dPbMgsFytEzzmyJyOimThzVgqi-N9v_VL9viaRzsfAK1rEzkTvbh3C-5bFYXwHGUmzSomDqarbbE8wZ2WtPF3OGyV4c-fxyO71uFp2cTxN7asfX7U-x-BUGKKCVfIYqFcWt3-v5AFlqGoZCppbkCw`,
                'Content-Type': 'application/json'
            },
            data:json
        };
        const apiUrl = "http://localhost:8182/provider/addItems"
     

        const res = axios.post(
            apiUrl,
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
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter titel" onChange={(e) => { settitle(e.target.value) }} />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">price</label>
                    <input type="text" className="form-control" placeholder="price" onChange={(e) => { setprice(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">describtion</label>
                    <input type="text" className="form-control" placeholder="describtion" onChange={(e) => { setdes(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">imageLink</label>
                    <input type="text" className="form-control" placeholder="imageLink" onChange={(e) => { setimage(e.target.value) }} />
                </div>

                <button type="submit" className="btn btn-primary mt-5" >add item</button>
            </form>
        </>
    )
}

export default management;