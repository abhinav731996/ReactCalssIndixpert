import axios from "axios";

// create an axios instance that will be use for all api 
export const api = axios.create({
    // timeout: 1000,
    baseURL: 'https://dummyjson.com',
})

// API to fetch products 
export const fetchProducts = async () => {
    const response = await api.get('/products')
    return(response.data)
}