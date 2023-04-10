import { createSlice } from "@reduxjs/toolkit"

interface cart {
    value: number
}

const initialState: cart = {
    value: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: state =>{
            state.value += 1
        },
        decrement: state =>{
            state.value -= 1
        },
        incrementByAmount: (state, action)=>{
            state.value += action.payload
        }
    }

})

export const { increment, decrement, incrementByAmount} = cartSlice.actions
export default cartSlice.reducer
