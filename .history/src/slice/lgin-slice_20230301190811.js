import { createSlice } from "@reduxjs/toolkit";

loginSlice("loginSlice/login")

const loginSlice= createSlice({
   initialState: "",
   name:"loginSlice",
   reducers:{},
   extraReducers:(buldier)=>{}
})

export const {}=loginSlice.actions;

export default loginSlice.reducer ;