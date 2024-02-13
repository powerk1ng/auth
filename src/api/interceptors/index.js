import axios from "axios";
import {
    configs
} from "../config";

const {
    baseUrl,
    endpoint
} = configs;

const $api = axios.create({
    withCredentials: true,
    baseURL: baseUrl
})

$api.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
}, function (error) {
    return Promise.reject(error);
});

$api.interceptors.response.use(function (config) {
    return config;
}, async function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401) {
        try {
            const response = await axios.get(`${baseUrl}${endpoint.auth.refresh}`, {
                withCredentials: true
            })
            localStorage.setItem('token', response.data.data.tokens.accessToken);
            return $api.request(originalRequest);

        } catch (error) {
            console.log('Not authorized');
        }
    }
})

export default $api;