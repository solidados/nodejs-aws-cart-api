import { CartItem } from '../../cart';

export enum OrderStatus {
  created = 'CREATED',
  shipped = 'SHIPPED',
}

export type Delivery = {
  firstName: string;
  lastName: string;
  address: string;
  comment: string;
};

export type OrderDto = Pick<Order, 'user_id' | 'cart_id' | 'delivery'>;

export type Order = {
  id?: string;
  user_id: string;
  cart_id: string;
  items: CartItem[];
  payment: {
    type: string;
    address?: any;
    creditCard?: any;
  };
  delivery: {
    type: string;
    address: any;
  };
  comments: string;
  status: string;
  total: number;
};
