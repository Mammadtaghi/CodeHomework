import {  } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:"todo",
    initialState:{
        list:[]
    },
    reducers:{
        addToDoItem:(state,action)=>{
            state.list.push(action.payload)
        }
    }
})

// not Ready

export const {addToDoItem} = todoSlice.actions

export default todoSlice.reducer