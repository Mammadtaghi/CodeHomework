import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        nums: [],
        operator: '',
        answer: [],
    },
    reducers: {
        AddNumber: (state, action) => {
            state.nums.push(action.payload)
            console.log(state.nums);
        },
        AddOperator: (state, action) => {
            state.operator = action.payload
        },
        Calculate: (state) => {
            console.log(state.operator, state.nums);
            if (state.operator && state.nums) {
                switch (state.operator) {
                    case "+":
                        return state.answer = state.nums[0] + state.nums[1]
                    case "-":
                        return state.answer = state.nums[0] - state.nums[1]
                    case '/':
                        return state.answer = state.nums[0] / state.nums[1]
                    case '*':
                        return state.answer = state.nums[0] * state.nums[1]
                    default:
                        return state.answer = "Something went wrong"
                }
            }
        }
    }
})

export const { AddNumber, AddOperator, Calculate } = calculatorSlice.actions
export default calculatorSlice.reducer