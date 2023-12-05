import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Redux/counterSlice";
import todoSlice from "./Redux/todoSlice";
import calculatorSlice from "./Redux/calculatorSlice";

export const store = configureStore({
    reducer:{
        counter: counterSlice,
        todo: todoSlice,
        calculator: calculatorSlice,
    }
})

