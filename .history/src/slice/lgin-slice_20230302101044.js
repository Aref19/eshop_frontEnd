import { createAsyncThunk,createS } from "@reduxjs/toolkit";
import axios from 'axios';


export const loginSliceF  =  createAsyncThunk("loginSlice/login",async()=>{
    const apiUrl = "http://localhost:8182/auth/token";
    const params = new URLSearchParams();
    params.append('client_id', 'eshop_backend');
    params.append('client_secret', 'C4MHtNVAt2cd3upSOjJ6fen4xVUCrUwP');
    params.append('grant_type', 'password');
    params.append('username',"e");
    params.append('password',"p");
    
   const res= await axios.post(apiUrl, params);
   const data = res


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