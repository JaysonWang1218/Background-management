import { createSlice } from "@reduxjs/toolkit";
createSlice({
    name: "tab",
    initialState:{
        isCollapse:false
    },
    reducers:{
        collapseMenu:state=>{
            state.isCollapse = !state.isCollapse;
        }
    }
})