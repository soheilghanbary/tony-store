import axios from 'axios'

const client = axios.create({
    baseURL: 'https://fakestoreapi.com/'
});

export const getAllProducts = async () => {
    const { data } = await client.get('products')
    return data;
}

export const getProduct = async (id?: any) => {
    const { data } = await client.get(`products/${id}`)
    return data;
}