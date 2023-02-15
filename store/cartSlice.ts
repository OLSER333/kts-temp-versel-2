import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type CartSliceT = {
  cartList: number[]
}

const initialState: CartSliceT = {
  cartList: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state = initialState, action: PayloadAction<number>) => {
      state.cartList.push(action.payload)
    },
    delFromCart: (state = initialState, action: PayloadAction<number>) => {
      const delIndex = state.cartList.findIndex(el => el === action.payload)
      if(delIndex !== -1) {
        state.cartList = [...state.cartList.slice(0, delIndex), ...state.cartList.slice(delIndex + 1)]
      }
    },
    clearCart: (state = initialState) => {
      state.cartList = []
    },
  },
})

export const { addToCart, delFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer