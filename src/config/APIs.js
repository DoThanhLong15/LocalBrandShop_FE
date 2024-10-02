import axios from "axios"
import cookie from "react-cookies"

const BASE_URL = 'http://localhost:8080/LocalBrandShop_BE/api/'

export const endpoints = {
    'categories': '/categories',
    'products': '/products',
    'login': '/login',
    'current-user': '/users/current-user',
    'register': '/users'
}

export const authAPIs = () => {
    let token = cookie.load("access-token");

    return axios.create({
        baseURL: BASE_URL,
        withCredentials: true, 
        headers: {
            'Authorization': token
        }
    })
}

export default axios.create({
    baseURL: BASE_URL
});