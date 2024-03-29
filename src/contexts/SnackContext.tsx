import { createContext, useState, useEffect, ReactNode } from 'react'

import { SnackData } from '../interfaces/SnackData'

import { getBebidas, getBurgers, getPizzas, getSobremesas } from '../services/api'

interface SnackContextProps{
  burgers: SnackData[]
  pizzas: SnackData[]
  bebidas: SnackData[]
  sobremesas: SnackData[]
}

interface SnackProviderProps{
  children: ReactNode;
}

export const SnackContext = createContext({} as SnackContextProps)

export function SnackProvider({ children }:  SnackProviderProps){
  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [bebidas, setBebidas] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [sobremesas, setSobremesas] = useState<SnackData[]>([])



  useEffect(() => {
    (async () => {
      try{
        const burgerRequest = await getBurgers()
        const pizzaRequest = await getPizzas()
        const bebidaRequest = await getBebidas()
        const sobremesaRequest = await getSobremesas()

        const requests = [ burgerRequest, bebidaRequest, pizzaRequest, sobremesaRequest]

        const[
          { data: burgerResponse},
          { data: bebidaResponse},
          { data: pizzaResponse},
          { data: sobremesaResponse},
        ] = await Promise.all(requests)

        setBurgers(burgerResponse)
        setBebidas(bebidaResponse)
        setPizzas(pizzaResponse)
        setSobremesas(sobremesaResponse)
      } catch(error){
        console.error(error)
    }
    })()
  }, [])

  return(
    <SnackContext.Provider value={{ burgers, pizzas, bebidas, sobremesas }}>
      { children }
    </SnackContext.Provider>
  )

}
