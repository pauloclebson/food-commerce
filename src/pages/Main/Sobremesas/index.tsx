import { useState, useEffect } from "react"

import Head from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { getSobremesas } from "../../../services/api"
import { SnackData } from "../../../interfaces/SnackData"

export default function Sobremesas() {
  const [sobremesas, setSobremesas] = useState<SnackData[]>([])

  useEffect(() => {
    (async() => {
      const sobremesaRequest = await getSobremesas()

      setSobremesas(sobremesaRequest.data)
    })()
  },[]
  )


  return(
    <div>
        <Head title="Sobremesas" />
        <SnackTitle>Sobremesas</SnackTitle>
        <Snacks snacks={sobremesas}></Snacks>
    </div>
    )
}
