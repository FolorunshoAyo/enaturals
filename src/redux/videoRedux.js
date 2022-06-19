import { createSlice } from "@reduxjs/toolkit";


const videoSlice = createSlice({
    name: "video",
    initialState:{
        videos: [],
        isFetching: false,
        error: ""
    },
    reducers: {
        getVideoStart: (state) => {
            state.isFetching = true;
        },
        getVideoSuccess: (state, action) => {
            state.isFetching = false;
            state.videos = action.payload;
        },
        getVideoFailure: (state, action) => {
            state.isFetching = false;
            state.error = action.payload.error;
        }
    }
});



export const { getVideoStart, getVideoSuccess, getVideoFailure } = videoSlice.actions;
export default videoSlice.reducer;