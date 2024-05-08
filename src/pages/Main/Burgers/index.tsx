import { useSnack } from "../../../hooks/useSnack";

import Head from "../../../components/Head"
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/SnackTitle"


export default function Burgers() {
  const { burgers } = useSnack()

    return(
    <div>
        <Head title="Hambúrgueres" />
        <SnackTitle>Hambúrgueres</SnackTitle>
        <Snacks snacks={burgers}></Snacks>
    </div>
    )
}
