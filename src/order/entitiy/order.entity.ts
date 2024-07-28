import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderStatus } from '../models';
import { Cart } from '../../cart/models/entity/cart.entity';

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', name: 'user_id' })
  user_id: string;

  @Column({ type: 'uuid', name: 'cart_id' })
  cart_id: string;

  @Column({ type: 'json', name: 'payment' })
  payment: object;

  @Column({ type: 'json', name: 'delivery' })
  delivery: object;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.created })
  status: OrderStatus;

  @ManyToOne(() => Cart, (cart) => cart.order, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'cart_id' })
  cart: Cart;
}
