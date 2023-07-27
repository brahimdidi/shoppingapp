import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemExist = state.cart.find((item) => item.id === action.payload.id);
            if (itemExist) {
                itemExist.quantity += 1;
            } else { 
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart = removeItem;
        },
        
        decrementQuantity: (state, action) => {
            const itemExist = state.cart.find((item) => item.id === action.payload.id);
            if (itemExist.quantity > 1) {
                itemExist.quantity -= 1;
            } else {
                const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
                state.cart = removeItem; 
            }
        }
    },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;