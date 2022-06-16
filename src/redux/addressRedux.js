import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "address",
  initialState: {
    addresses: [],
    isFetching: false,
    error: "",
  },
  reducers: {
    //GET
    getAddressStart: (state) => {
      state.isFetching = true;
    },
    getAddressSuccess: (state, action) => {
      state.isFetching = false;
      state.addresses = action.payload;
      state.error = "";
    },
    getAddressFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload.error;
    },
    //DELETE
    deleteAddressStart: (state) => {
      state.isFetching = true;
    },
    deleteAddressSuccess: (state, action) => {
      state.isFetching = false;
      state.addresses.splice(
        state.addresses.findIndex((item) => item._id === action.payload),
        1
      );
      state.error = "";
    },
    deleteAddressFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload.error;
    },
    //UPDATE
    updateAddressStart: (state) => {
      state.isFetching = true;
    },
    updateAddressSuccess: (state, action) => {
      state.isFetching = false;
      state.addresses[state.addresses.findIndex((item) => item._id === action.payload.id)] = action.payload.address;
      state.error = "";
    },
    updateAddressFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload.error;
    },
    //CHANGE DEFAULT ADDRESS
    changeDefaultAddressStart: (state) => {
      state.isFetching = true;
    },
    changeDefaultAddressSuccess: (state, action) => {
      state.isFetching = false;
      state.addresses[state.addresses.findIndex(address => address._id === action.payload.formerDefaultAddressId)].isDefault = false;
      state.addresses[state.addresses.findIndex((item) => item._id === action.payload.id)] = action.payload.address;
      state.error = "";
    },
    changeDefaultAddressFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload.error;
    },
    //ADD
    addAddressStart: (state) => {
      state.isFetching = true;
    },
    addAddressSuccess: (state, action) => {
      state.isFetching = false;
      state.addresses.push(action.payload);
      state.error = "";
    },
    addAddressFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  getAddressStart,
  getAddressSuccess,
  getAddressFailure,
  deleteAddressStart,
  deleteAddressSuccess,
  deleteAddressFailure,
  updateAddressStart,
  updateAddressSuccess,
  updateAddressFailure,
  changeDefaultAddressStart,
  changeDefaultAddressSuccess,
  changeDefaultAddressFailure,
  addAddressStart,
  addAddressSuccess,
  addAddressFailure,
} = addressSlice.actions;
export default addressSlice.reducer;
