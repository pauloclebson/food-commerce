import axios from 'axios'
import { SnackData } from '../interfaces/SnackData'
import { Snack } from '../interfaces/Snack'
import { CustomerData } from '../interfaces/CustomerData'

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

export const processCheckout = (cart: Snack[], customer: CustomerData) => api.post('/checkout', {
  cart,
  customer:{
    fullName: customer.fullName,
    email: customer.email,
    mobile: customer.mobile,
    document: customer.document,
    zipCode: customer.zipCode,
    street: customer.street,
    number: customer.number,
    complement: customer.complement,
    neighborhood: customer.neighborhood,
    city: customer.city,
    state: customer.state,
  },
  payment: {
    creditCardNumber: customer.creditCardNumber,
    creditCardHolder: customer.creditCardHolder,
    creditCardExpiration: `${new Date(customer.creditCardExpiration).getMonth() + 1}/${new Date(
      customer.creditCardExpiration,
    ).getFullYear()}`
  }
})

export default api
