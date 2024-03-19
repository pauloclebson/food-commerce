import Head from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Pizzas() {
    const data = [
        {
            id: 1,
            snack: 'pizza',
            name: 'Pizza de Calabresa',
            description:'Deliciosa pizza de calabresa com cebolas',
            price: 30.99,
            image: 'https://i.imgur.com/Qtrvqb0.jpeg',
        },
        {
            id: 2,
            snack: 'burguer',
            name: 'Extra Bacon',
            description:'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda queijo e carne.',
            price: 23.5,
            image: 'https://i.imgur.com/B4J04AJ.jpg',
        }
    ]

    return(
        <>
            <Head title="Pizzas" />
            <SnackTitle>Pizzas</SnackTitle>
            <Snacks snacks={data}></Snacks>
        </>
        )
}
