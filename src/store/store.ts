import { AnyAction, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import cartSlice from '../features/cartSlice'

const store = configureStore({
    reducer:{
        cart: cartSlice
    }

})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store