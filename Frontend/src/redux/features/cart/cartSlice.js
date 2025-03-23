import { createSlice } from '@reduxjs/toolkit'
import Swal from "sweetalert2"

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState, 
    reducers:{
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (!existingItem) {
                state.cartItems.push(action.payload)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item added to the cart!",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else(
                Swal.fire({
                    title: "Item already in cart.",                    
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Ok"
                })
            )
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
        },
        clearCart: (state) => {
            state.cartItems = []
        }
    }
})

// export actions
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;