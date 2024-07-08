import { useParams } from 'react-router-dom'
import Head from '../../../components/Head'
import { Container, Inner, SubTitle, Title } from './styled'

export default function OrderSuccessPage() {
  const { orderId } = useParams()

  return (
    <Container>
      <Head title='Compra Realizada com Sucesso!' />
      <Inner>
        <Title>Compra Realizada com Sucesso</Title>
        <p>
          Número do Pedido <code>{orderId}</code>
        </p>

        <SubTitle>Dados de Contato da Loja</SubTitle>

        <ul>
          <li>Endereço: Av Central, 123</li>
          <li>Tel: 11 98412-4355</li>
        </ul>
      </Inner>
    </Container>
  )
}
