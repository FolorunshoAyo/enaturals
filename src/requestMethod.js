import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmQ4NDkxY2RhM2U3ZDkwYzEwNDI4OCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTI5NzE4NTksImV4cCI6MTY1MzIzMTA1OX0.f6DxNSw4rEkQ2MYaBQt5L36uIpBFh9RDhrhY-xE7FOY"



export const publicRequest = axios.create({
    baseURL: BASE_URL
});


export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {
        token: `Bearer ${TOKEN}`
    }
});