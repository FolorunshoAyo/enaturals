import { createSlice } from "@reduxjs/toolkit";


const pictureSlice = createSlice({
    name: "picture",
    initialState:{
        pictures: [],
        isFetching: false,
        error: ""
    },
    reducers: {
        getPictureStart: (state) => {
            state.isFetching = true;
        },
        getPictureSuccess: (state, action) => {
            state.isFetching = false;
            state.pictures = action.payload;
        },
        getPictureFailure: (state, action) => {
            state.isFetching = false;
            state.error = action.payload.error;
        }
    }
});



export const { getPictureStart, getPictureSuccess, getPictureFailure } = pictureSlice.actions;
export default pictureSlice.reducer;