import { useState, useEffect } from "react"
import Head from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { getBebidas } from "../../../services/api"
import { SnackData } from "../../../interfaces/SnackData"

export default function Bebidas() {
  const [bebidas, setBebidas] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      const bebidaRequest = await getBebidas()

      setBebidas(bebidaRequest.data)
    })()
  },[]
  )
  return(
    <div>
        <Head title="Bebidas" />
        <SnackTitle>Bebidas</SnackTitle>
        <Snacks snacks={bebidas}></Snacks>
    </div>
    )
}
