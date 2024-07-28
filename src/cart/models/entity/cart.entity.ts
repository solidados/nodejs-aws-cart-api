/**
 * id - uuid (Primary key)
 * user_id - uuid, not null (It's not Foreign key, because there is no user entity in DB)
 * created_at - date, not null
 * updated_at - date, not null
 * status - enum ("OPEN", "ORDERED")
 */

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CartStatus } from '../index';
import { CartItem } from './cart-item.entity';
import { Order } from '../../../order';

@Entity('cart')
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false })
  user_id: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: (): string => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: (): string => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  updated_at: Date;

  @Column({ type: 'enum', enum: CartStatus })
  status: CartStatus;

  @OneToMany(() => Order, (order) => order.cart)
  order: Order;

  @OneToMany(() => CartItem, (item) => item.cart)
  items: CartItem[];

  @JoinColumn({ name: 'user_id' })
  user: User;
}
