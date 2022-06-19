import { createSlice } from "@reduxjs/toolkit";


const blogSlice = createSlice({
    name: "blog",
    initialState:{
        blogs: [],
        isFetching: false,
        error: ""
    },
    reducers: {
        getBlogStart: (state) => {
            state.isFetching = true;
        },
        getBlogSuccess: (state, action) => {
            state.isFetching = false;
            state.blogs = action.payload;
        },
        getBlogFailure: (state, action) => {
            state.isFetching = false;
            state.error = action.payload.error;
        }
    }
});



export const { getBlogStart, getBlogSuccess, getBlogFailure } = blogSlice.actions;
export default blogSlice.reducer;