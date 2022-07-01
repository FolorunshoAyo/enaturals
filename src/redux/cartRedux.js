import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        addDiscountedProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.discountPrice * action.payload.quantity;
        },
        removeProduct: (state, action) => {
            return {
                products: state.products.filter(product => product._id !== action.payload.productID),
                quantity: state.quantity - state.products.filter(product => action.payload.productID === product._id).length,
                total: state.total - action.payload.price * action.payload.quantity
            }
        } 
    }
});



export const { addProduct, addDiscountedProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;