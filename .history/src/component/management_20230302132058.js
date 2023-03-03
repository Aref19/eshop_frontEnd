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
            headers: { Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJnYU5rZHNWT25mb2VubTByNXZ4dk5qSlVCQzc1V09wSnA3aUlqUEUwSGtjIn0.eyJleHAiOjE2Nzc3NTk2NjYsImlhdCI6MTY3Nzc1OTYwNiwianRpIjoiNzZmYjU5YzctMzNhYS00OTE4LWI4MWEtM2E1ZWIxMzZjMWU4IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL21hc3RlciIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI2ZmY0Y2U0Zi05OGFlLTQ0Y2ItYTYwZS00OTNhZmMyMDBkZDIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJlc2hvcF9iYWNrZW5kIiwic2Vzc2lvbl9zdGF0ZSI6ImE1YjcyNTEzLWIzNDgtNDY5MC05ZjJjLTU1MmYyZmYyZWJlNiIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1tYXN0ZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiZXNob3BfYmFja2VuZCI6eyJyb2xlcyI6WyJwcm92aWRlciIsImFkbWluIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiJhNWI3MjUxMy1iMzQ4LTQ2OTAtOWYyYy01NTJmMmZmMmViZTYiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJhZG1pbkBnbWFpbC5jb20gYWRtaW5AZ21haWwuY29tIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW5AZ21haWwuY29tIiwiZ2l2ZW5fbmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImZhbWlseV9uYW1lIjoiYWRtaW5AZ21haWwuY29tIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20ifQ.QXvC28ahIl8MR50goVfBxHcEpShBO2nxafgnQzDFdtS4bmGL-JPN0djjg1tH_9TdDzJWxjc481xXjahuiB4oUlWDrlZhQLvtI51o7DjCoPf9OF_mwPxWwzWPx4mB7E24I9QLAMR9lHatbedU54uLeYNq_lxc7D1SgTQP4_mpYVnz2JuiNX7SKopmSHl37yhb2T9zyUhBBAQSrLCq50w3xt0wxoFsQ0k5XEbsFLN8cqZM6VQkaxW8k8mxzo3ueuEkdTDq--RiefOEJHsytJnvYkB7sd0gKOPqbrM2iaRwMk1--gLSP6jllO4gOJ0XSfN6cM8wJBFNh1ixFNApLjl9rQ` }
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
      const res= axios.post(apiUrl,json);
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