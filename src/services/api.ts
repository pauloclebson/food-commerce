import axios from 'axios'
import { SnackData } from '../interfaces/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  //baseURL: 'https://seusite.com.br/api'
})

//https://seusite.com.br/api/burgers
//https://seusite.com.br/api/pizzas
//https://seusite.com.br/api/bebidas
//https://seusite.com.br/api/sobremesas


export const getBurgers = () => api.get<SnackData[]>('/burgers')
export const getPizzas = () => api.get<SnackData[]>('/pizzas')
export const getBebidas = () => api.get<SnackData[]>('/bebidas')
export const getSobremesas = () => api.get<SnackData[]>('/sobremesas')

export default api
