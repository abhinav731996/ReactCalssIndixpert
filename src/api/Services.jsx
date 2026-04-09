import axios from "axios";

// create an axios instance that will be use for all api  
export const api = axios.create({
    // timeout: 1000,
    baseURL: 'https://dummyjson.com',
})

// API for users 
export const mockApi = axios.create({
    baseURL: 'https://69d4e6fdd396bd74235df0bc.mockapi.io'
})

// API to fetch products 
export const fetchProducts = async () => {
    const response = await api.get('/products')
    return(response.data)
}

