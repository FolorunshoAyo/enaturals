import { createSlice } from "@reduxjs/toolkit";


const slideSlice = createSlice({
    name: "slide",
    initialState:{
        slides: [],
        isFetching: false,
        error: ""
    },
    reducers: {
        getSlideStart: (state) => {
            state.isFetching = true;
        },
        getSlideSuccess: (state, action) => {
            state.isFetching = false;
            state.slides = action.payload;
        },
        getSlideFailure: (state, action) => {
            state.isFetching = false;
            state.error = action.payload.error;
        }
    }
});



export const { getSlideStart, getSlideSuccess, getSlideFailure } = slideSlice.actions;
export default slideSlice.reducer;