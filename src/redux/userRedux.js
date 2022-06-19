import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: "user",
    initialState:{
        currentUser: null,
        isFetching: false,
        error: ""
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state, action) => {
            state.isFetching = false;
            state.error = action.payload.error;
        },
        logoutSuccess: (state, action) => {
            state.currentUser = null;
            state.isFetching = false;
            state.error = "";
        },
        updateUserStart: (state) => {
            state.isFetching = true;
        },
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.isFetching = false;
        },
        updateUserFinished: (state) => {
            state.isFetching = false;
        },
        updateuserFailure: (state, action) => {
            state.isFetching = false;
            state.error = action.payload.error;
        }
    }
});



export const { 
    loginStart, 
    loginSuccess, 
    loginFailure, 
    logoutSuccess,
    updateUserStart,
    updateUserSuccess,
    updateUserFinished,
    updateUserFailure
 } = userSlice.actions;
export default userSlice.reducer;