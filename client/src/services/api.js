import axios from "axios";
import { getToken } from "../utils/auth";


const API = axios.create({

    baseURL:"https://social-post-composer-api.onrender.com/api"

});


API.interceptors.request.use(
    
    (config)=>{

        const token = getToken();

        if(token){

            config.headers.Authorization =
            `Bearer ${token}`;

        }

        return config;

    },

    (error)=>{

        return Promise.reject(error);

    }

);


export default API;
