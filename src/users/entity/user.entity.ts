import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '../../order/entitiy/order.entity';
import { Cart } from '../../cart/models/entity/cart.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: 'uuid';

  @Column()
  name: string;

  @Column()
  password: string;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToMany(() => Cart, (cart) => cart.user)
  carts: Cart[];
}
