import Head from "../../components/Head";
import { OrderHeader } from "../../components/OrderHeader";

import { Container } from "./styles";

export default function Payment(){
  return (
    <Container>
      <Head title="Pagamento" />
      <OrderHeader />
    </Container>
  )
}
