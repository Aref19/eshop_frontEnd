import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


loginSlice("loginSlice/login",async()=>{
    const apiUrl = "http://localhost:8182/auth/token";

})

const loginSlice= createSlice({
   initialState: "",
   name:"loginSlice",
   reducers:{},
   extraReducers:(buldier)=>{}
})

export const {}=loginSlice.actions;

export default loginSlice.reducer ;