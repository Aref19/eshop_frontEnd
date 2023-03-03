import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


exconst loginSlice("loginSlice/login",async()=>{
    const apiUrl = "http://localhost:8182/auth/token";
    const params = new URLSearchParams();
    params.append('client_id', 'eshop_backend');
    params.append('client_secret', 'C4MHtNVAt2cd3upSOjJ6fen4xVUCrUwP');
    params.append('grant_type', 'password');
    params.append('username',e);
    params.append('password',p);
    console.log(password);
    axios.post(apiUrl, params).then((data)=>{return data}) 

})

const loginSlice= createSlice({
   initialState: "",
   name:"loginSlice",
   reducers:{},
   extraReducers:(buldier)=>{}
})

export const {}=loginSlice.actions;

export default loginSlice.reducer ;