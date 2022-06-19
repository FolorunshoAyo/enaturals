import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: "product",
    initialState:{
        products: [],
        isFetching: false,
        error: ""
    },
    reducers: {
        getProductStart: (state) => {
            state.isFetching = true;
        },
        getProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        },
        getProductFailure: (state, action) => {
            state.isFetching = false;
            state.error = action.payload.error;
        }
    }
});



export const { getProductStart, getProductSuccess, getProductFailure } = productSlice.actions;
export default productSlice.reducer;