import { createContext, useState, ReactNode } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { SnackData } from '../interfaces/SnackData'

import { snackEmoji } from '../helpers/snackEmoji'
import { CustomerData } from '../interfaces/CustomerData'

interface Snack extends SnackData{
  quantity: number
  subtotal: number
}


interface CartContextProps{
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: (snack: Snack) => void
  snackCartIncrement: (snack: Snack) => void
  snackCartDecrement: (snack: Snack) => void
  confirmOrder: () => void
  payOrder: (customer: CustomerData) => void
  // updateCart: ({ id, snack, newQuantity }: UpdateCartProps) => void
}

interface CartProviderProps{
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

const localStorageKey = '@FoodCommerce:cart'

export function CartProvider({ children }: CartProviderProps){
  const navigate = useNavigate()
  const [cart, setCart] = useState<Snack[]>(() => {
    const value = localStorage.getItem(localStorageKey)

    if(value) return JSON.parse(value)

    return []
  })

  function saveCart(items: Snack[]){
    setCart(items)

    localStorage.setItem(localStorageKey, JSON.stringify(items))
  }

  function clearCart(){
    localStorage.removeItem(localStorageKey)
  }

  function addSnackIntoCart(snack: SnackData): void{
    //buscar
    const snackExistentInCart = cart.find(( item ) => item.snack === snack.snack && item.id === snack.id)

    //atualizar
    if(snackExistentInCart){
      const newCart = cart.map((item)=> {
        if(item.id === snack.id){
          const quantity = item.quantity + 1
          const subtotal = item.price * quantity

          return { ...item, quantity, subtotal }
        }

        return item
      })

      toast.success(`Outro(a) ${snackEmoji(snack.snack)} ${snack.name} adicionado no carrinho!`)
      saveCart(newCart)
      return
    }

    //adicionar
    const newSnack = { ...snack, quantity: 1, subtotal: snack.price}
    const newCart = [...cart, newSnack]

    console.log(`newCart adição`, newCart)
    toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado no carrinho!`)

    saveCart(newCart)
  }

  function removeSnackFromCart(snack: Snack){
    const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack))

    saveCart(newCart)
  }

  function updateSnackQuantity(snack: Snack, newQuantity: number){
    if(newQuantity <= 0) return

    const snackExistentInCart = cart.find((item) => item.id === snack.id && item.snack === snack.snack)

    if(!snackExistentInCart) return

    const newCart = cart.map((item) => {
      if(item.id === snackExistentInCart.id && item.snack === snackExistentInCart.snack){
        return{
          ...item,
          quantity: newQuantity,
          subtotal: item.price * newQuantity,
        }
      }

      return item
    })

    saveCart(newCart)
  }

  function snackCartIncrement(snack: Snack){
    updateSnackQuantity(snack, snack.quantity + 1)
  }

  function snackCartDecrement(snack: Snack){
    updateSnackQuantity(snack, snack.quantity - 1)
  }

  function confirmOrder() {
    navigate('/payment')
  }

  function payOrder(customer: CustomerData) {
    console.log('payOrder', cart, customer)
    clearCart() //deve ser executado após o retorno positivo da API
    //Chamada de API para o backend
    return
  }



  return(
    <CartContext.Provider value={{
      cart,
      addSnackIntoCart,
      removeSnackFromCart,
      snackCartIncrement,
      snackCartDecrement,
      confirmOrder,
      payOrder,
      }}>
      {children}
    </CartContext.Provider>
  )
}
