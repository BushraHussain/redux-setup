import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface ICounter { // Define type 
    counter : number; // counter is variable / state name
}

const initialState: ICounter = { // Declare initial state for counter
    counter : 0
}

export const counterSlice = createSlice ({
    name: "counter",
    initialState,
    reducers : {
        increment: (state) => {
            state.counter += 1;
        },

        decrement: (state, action) => {
            state.counter = state.counter - action.payload;
        },

        addByAmount : (state, action) => {
            state.counter += action.payload;
        }


    }
})

export const {increment, decrement, addByAmount} = counterSlice.actions;
export default counterSlice.reducer;
