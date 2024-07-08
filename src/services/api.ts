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


export const getBurgers = () => api.get<SnackData[]>('/snacks?snack=burger')
export const getPizzas = () => api.get<SnackData[]>('/snacks?snack=pizza')
export const getBebidas = () => api.get<SnackData[]>('/snacks?snack=drink')
export const getSobremesas = () => api.get<SnackData[]>('/snacks?snack=ice-cream')

export default api
