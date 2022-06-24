import { publicRequest, userRequest } from "../requestMethod";
import toast from "react-hot-toast";


import { 
  loginFailure, 
  loginStart, 
  loginSuccess, 
  logoutSuccess,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  updateUserFinished
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

import { closeModal } from "./login-register-modalRedux";

import {
  getProductStart,
  getProductSuccess,
  getProductFailure
} from "./productRedux";

import {
  getSlideStart,
  getSlideSuccess,
  getSlideFailure
} from "./slideRedux";

import {
  getPictureStart,
  getPictureSuccess,
  getPictureFailure
} from "./picturesRedux";

import {
  getVideoStart,
  getVideoSuccess,
  getVideoFailure
} from "./videoRedux";

// import {
//   getReviewStart,
//   getReviewSuccess,
//   getReviewFailure
// } from "./reviewRedux";

import {
  getBlogStart,
  getBlogSuccess,
  getBlogFailure
} from "./blogRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());

    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
        toast.success("Logged in successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1000);

        dispatch(closeModal());
    }catch(error){
      toast.error("Invalid Username or Password");
      dispatch(loginFailure({error: error.response.data}))
    }
}

export const logout = async (dispatch) => {
    dispatch(logoutSuccess());
    toast.success("Logged out successfully");
}

export const changePass = async (chnagePassDetails) => {
  try{
    await publicRequest.post("/auth/changepass", chnagePassDetails);
    toast.success("Password changed successfully");
  }catch(error){
    toast.error(error.response.data === "Incorrect password"? error.response.data : "Unable to change password (501)");
  }
};

export const tokenInvalidLogout = (dispatch) => {
  dispatch(logoutSuccess());
  toast.error("session has timed out");
};

export const registerUser = async (user, dispatch) => {
  dispatch(updateUserStart());

  try{
    await userRequest.post(`/auth/register`, user);
    toast.success("Registered successfully");
    dispatch(updateUserFinished());
  }catch (error){
    toast.error("Unable to update user (501)");
    dispatch(updateUserFailure({error: error.response.data}))
  }
}

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());

  try{
    const res = await userRequest.put(`/users/${id}`, user);
    dispatch(updateUserSuccess(res.data));
    toast.success("Update user details successfully");
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


  export const getAllProducts = async (endpoint, dispatch) => {
    dispatch(getProductStart());

    try{
      const res = await publicRequest.get(endpoint);
      dispatch(getProductSuccess(res.data));
    }catch(error){
      toast.error("Unable to get products (501)");
      dispatch(getProductFailure({error: error.response.data}));
    }
  }


  export const getProductsByRange = async (max, min, dispatch) => {
    dispatch(getProductStart());

    try{
      const res = await publicRequest.get(`/products/?max=${max}&min=${min}`);
      dispatch(getProductSuccess(res.data));
    }catch(error){
      toast.error("Unable to get ranged products (501)");
      dispatch(getProductFailure({error: error.response.data}));
    }
  }

  export const getSlides = async (dispatch) => {
    dispatch(getSlideStart());

    try{
      const res = await publicRequest.get(`/slides/`);
      dispatch(getSlideSuccess(res.data));
    }catch(error){
      toast.error("Unable to get slides (501)");
      dispatch(getSlideFailure({error: error.response.data}));
    }
  };

  export const getPictures = async (dispatch) => {
    dispatch(getPictureStart());

    try{
      const res = await publicRequest.get(`/pictures/`);
      dispatch(getPictureSuccess(res.data));
    }catch(error){
      toast.error("Unable to get pictures (501)");
      dispatch(getPictureFailure({error: error.response.data}));
    }
  };

  export const getVideos = async (dispatch) => {
    dispatch(getVideoStart());

    try{
      const res = await publicRequest.get(`/videos/`);
      dispatch(getVideoSuccess(res.data));
    }catch(error){
      toast.error("Unable to get ranged videos (501)");
      dispatch(getVideoFailure({error: error.response.data}));
    }
  };

  export const getBlogs = async (dispatch) => {
    dispatch(getBlogStart());

    try{
      const res = await publicRequest.get(`/blogs/`);
      dispatch(getBlogSuccess(res.data));
    }catch(error){
      toast.error("Unable to get blogs (501)");
      dispatch(getBlogFailure({error: error.response.data}));
    }
  };

  // export const getReviews = async (dispatch) => {
  //   dispatch(getReviewStart());

  //   try{
  //     FETCHING GOOGLE REVIEWS
  //     const res = await publicRequest.get(`/googleReviews/`);
  //     dispatch(getReviewSuccess(res.data));
  //   }catch(error){
  //     toast.error("Unable to get google Reviews (501)");
  //     dispatch(getReviewFailure({error: error.response.data}));
  //   }
  // }


  

