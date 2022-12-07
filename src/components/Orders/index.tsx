import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    _id: '638f4103d59bf9354aa97e44',
    table: '3',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1670291516590-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
        _id: '638f5721d59bf9354aa97e60',
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1670294114407-coca-cola.png',
          price: 7,
        },
        quantity: 2,
        _id: '638f4103d59bf9354aa97e45',
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕛️" title="Fila de Espera" orders={orders} />
      <OrdersBoard icon="👨‍🍳" title="Em Produção" orders={[]} />
      <OrdersBoard icon="✅" title="Concluído" orders={[]} />
    </Container>
  );
}
