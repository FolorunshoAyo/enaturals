import { createSlice } from "@reduxjs/toolkit";


const reviewSlice = createSlice({
    name: "review",
    initialState:{
        reviews: [],
        isFetching: false,
        error: ""
    },
    reducers: {
        getReviewStart: (state) => {
            state.isFetching = true;
        },
        getReviewSuccess: (state, action) => {
            state.isFetching = false;
            state.reviews = action.payload;
        },
        getReviewFailure: (state, action) => {
            state.isFetching = false;
            state.error = action.payload.error;
        }
    }
});



export const { getReviewStart, getReviewSuccess, getReviewFailure } = reviewSlice.actions;
export default reviewSlice.reducer;