import { createSlice } from "@reduxjs/toolkit"

const initialSlice = {
    value: 0,

}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment:(state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state,action) => {
            state.value += action.payload
        }
    }
});