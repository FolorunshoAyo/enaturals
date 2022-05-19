import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart());

    console.log(user);
    try{
        const res = await publicRequest.post("/auth/login", user);
        console.log(res);
        dispatch(loginSuccess(res.data));
    }catch(error){
        dispatch(loginFailure({error: error.response.data}))
    }
}