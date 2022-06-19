import { createSlice } from "@reduxjs/toolkit";



const loginRegisterModalSlice = createSlice({
    name: "loginRegsiterModal",
    initialState:{
        active: false,
        tabNo: 1
    },
    reducers: {
        successfulRegister: (state) => {
            state.tabNo = 1;
        },
        notLoggedIn: (state) => {
            state.active = true;
        },
        closeModal: (state) => {
            state.active = false;
        },
        toggleModal: (state, action) => {
            state.active = action.payload.active;
        },
        switchTab: (state, action) => {
            state.tabNo = action.payload.tabNo;
        }
    }
});



export const { 
    successfulRegister,
    notLoggedIn,
    closeModal,
    toggleModal,
    switchTab
 } = loginRegisterModalSlice.actions;
export default loginRegisterModalSlice.reducer;