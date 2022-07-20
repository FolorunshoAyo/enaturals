import axios from "axios";

const BASE_URL = "https://enaturalsskincare.co/api";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL
});

userRequest.interceptors.request.use(config => {
    // const token = localStorage.getItem('accesstoken');
    const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
    config.headers.token =  token ? `Bearer ${token}` : '';
    return config;
});