import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{

        increment:(state)=>{
            // to increment count 
            state.count++
        },
        decrement:(state)=>{
            // to decrement
            state.count--
        },
        reset:(state)=>{
            return{...state,count:0}
        },
        incrementByAmount:(state,action)=>{
            state.count+=action.payload

        }
    }

})


export const {increment,decrement,reset,incrementByAmount}=counterSlice.actions

export default counterSlice.reducer

