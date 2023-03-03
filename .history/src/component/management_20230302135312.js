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
    console.log("toke", login.access_token);
    const onSubmit = async (e) => {
        e.preventDefault();
        addItem();

    }
    const json = JSON.stringify({
        price: price,
        title: title,
        desc: des,
        image: [
            {
                url: imga
            }
        ]

    });
    function addItem() {
        const config = {
            maxBodyLength: Infinity,
            headers: {
                Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJnYU5rZHNWT25mb2VubTByNXZ4dk5qSlVCQzc1V09wSnA3aUlqUEUwSGtjIn0.eyJleHAiOjE2Nzc3NjE2NDIsImlhdCI6MTY3Nzc2MTU4MiwianRpIjoiM2NiZDcwZjQtZjU5Yy00NWExLTk2NmYtZTE2MjEyODU1Nzk2IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL21hc3RlciIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI2ZmY0Y2U0Zi05OGFlLTQ0Y2ItYTYwZS00OTNhZmMyMDBkZDIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJlc2hvcF9iYWNrZW5kIiwic2Vzc2lvbl9zdGF0ZSI6ImJmNTY1MDViLWZmNDktNGQ0Mi04ZDA0LWE5MDhjYTBhM2MwMSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1tYXN0ZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiZXNob3BfYmFja2VuZCI6eyJyb2xlcyI6WyJwcm92aWRlciIsImFkbWluIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiJiZjU2NTA1Yi1mZjQ5LTRkNDItOGQwNC1hOTA4Y2EwYTNjMDEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJhZG1pbkBnbWFpbC5jb20gYWRtaW5AZ21haWwuY29tIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW5AZ21haWwuY29tIiwiZ2l2ZW5fbmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImZhbWlseV9uYW1lIjoiYWRtaW5AZ21haWwuY29tIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20ifQ.MDa0jvHkpIXsu_gjxm0WBOEacBX-iIO9h2TYT9cgbG-o-GbWcRXGwuaRtxPHeflgupz9rHAz53qVFkhCNc5I2g9iDCvz0SxmTUZAQdGfxcOlsLOJnVH_4AoSKT74HcZ7hI5XGuuc0nEjufIQGROyId27aFdlEGKKnn15ce9vjs4dgtsAOXdITDsAYXvpCWsNqFDFpnvwKd6vZptc3yXBPL2Ri4c_gXbhnF71MnTVJ6K2r01w7dW1zoTEhZjbOrkvQM4ifZ-rGP1gF5KODM9WmgQO9i6o39r2WzAHuLZpGyXvmhbxvn2QPnPtNxxWkJc1wYTB1yWy5x0-mkdAj0SWdg`,
                'Content-Type': 'application/json'
            },
            data: json
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