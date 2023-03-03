
import axios from 'axios';
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const loginSliceF  =  createAsyncThunk("loginSlice/login",async(data)=>{
    const apiUrl = "http://localhost:8182/auth/token";
    const params = new URLSearchParams();
    params.append('client_id', 'eshop_backend');
    params.append('client_secret', 'C4MHtNVAt2cd3upSOjJ6fen4xVUCrUwP');
    params.append('grant_type', 'password');
    const {email,password}=data;
    console.log(data);
    params.append('username',email);
    params.append('password',password);
    
   const res= await axios.post(apiUrl, params).then;
   console.log(res);
  


})

const loginSlice= createSlice({
   initialState: [],
   name:"loginSlice",
   reducers:{},
   extraReducers:(builder)=>{
    builder.addCase(
        loginSliceF.fulfilled
        ,(state,action)=>{
        return action.payload; //initialState take info
    })
   }
})

export const {} = loginSlice.actions;

export default loginSlice.reducer ;