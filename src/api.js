import axios from "axios";

export default axios.create({
    baseURL:"https://todolist3-1.onrender.com",
    headers:{
        'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    withCredentials: true
})