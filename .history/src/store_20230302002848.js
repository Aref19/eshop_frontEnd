import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/lgin-slice"

export const store =configureStore({
    reducer:{
        login:loginSlice
    }
})

ex