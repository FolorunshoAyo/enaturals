import { publicRequest, userRequest } from "../requestMethod";
import toast from "react-hot-toast";


import { 
  loginFailure, 
  loginStart, 
  loginSuccess, 
  logoutSuccess,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure
} from "./userRedux";

import {
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
} from "./addressRedux";


export const login = async (dispatch, user) => {
    dispatch(loginStart());

    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
        toast.success("Logged in successfully");
    }catch(error){
      toast.error("Invalid Email or Password");
      dispatch(loginFailure({error: error.response.data}))
    }
}

export const logout = async (dispatch) => {
    dispatch(logoutSuccess());
    toast.success("Logged out successfully");
}

export const tokenInvalidLogout = (dispatch) => {
  dispatch(logoutSuccess());
  toast.error("session has timed out");
};

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());

  try{
    const res = await userRequest.put(`/users/${id}`, user);
    dispatch(updateUserSuccess(res.data));
  }catch (error){
    toast.error("Unable to update user (501)");
    dispatch(updateUserFailure({error: error.response.data}))
  }
}

export const getAddress = async (userID, dispatch) => {
    dispatch(getAddressStart());
    
    try {
      const res = await userRequest.get(`/address/${userID}`);
      dispatch(getAddressSuccess(res.data));
    } catch (error) {
      toast.error("Unable to get address (501)");
      dispatch(getAddressFailure({ error: error.response.data }));
    }
  };
    
  export const deleteAddress = async (id, dispatch) => {
    dispatch(deleteAddressStart());
    
    try {
      await userRequest.delete(`/address/${id}`);
      dispatch(deleteAddressSuccess(id));
      toast.success("The address was successfully deleted.");
    } catch (error) {
      toast.error("Unable to delete address (501)");
      dispatch(deleteAddressFailure({ error: error.response.data }));
    }
  };
    
  export const updateAddress = async (id, AddressPost, dispatch) => {
      dispatch(updateAddressStart());
      
      try {
        const res = await userRequest.put(`/address/${id}`, AddressPost);
        dispatch(updateAddressSuccess({id, address: res.data}));
        toast.success("The address was updated successfully.");
      } catch (error) {
        toast.error("Unable to update address (501)");
        dispatch(updateAddressFailure({ error: error.response.data }));
      }
  };
    
    
  export const addAddress = async (address, dispatch) => {
      dispatch(addAddressStart());
  
      try {
        const res = await userRequest.post(`/address/`, address);
        dispatch(addAddressSuccess(res.data));
        toast.success("The address was created successfully");
      } catch (error) {
        toast.error("Unable to add Address (501)");
        dispatch(addAddressFailure({ error: error.response.data }));
      }
  };


  export const changeDefaultAddress = async (formerDefaultAddressId, id, dispatch) => {
    dispatch(changeDefaultAddressStart());
    try {
      const res = await userRequest.put(`/address/changeDefault/${id}?formerDefaultAddress=${formerDefaultAddressId}`);
      dispatch(changeDefaultAddressSuccess({id, formerDefaultAddressId, address: res.data}));
      toast.success("Address updated successfully.");
    } catch (error) {
      toast.error("Unable to update address (501)");
      dispatch(changeDefaultAddressFailure({ error: error.response.data }));
    }
  }