import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmQ4NDkxY2RhM2U3ZDkwYzEwNDI4OCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTEzNDQ1NTAsImV4cCI6MTY1MTYwMzc1MH0.qMJMlwBrLd4h4bLeulCbWwMo0Ih8jrpDyfMqjzz_3TA"



export const publicRequest = axios.create({
    baseURL: BASE_URL
});


export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {
        token: `Bearer ${TOKEN}`
    }
});