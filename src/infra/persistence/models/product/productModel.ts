import { Entity, Column } from 'typeorm';
import BaseModel from '@core/common/model/BaseModel';

@Entity('products')
export class Products extends BaseModel {
  @Column()
  name!: string;

  @Column()
  price!: number;

  @Column()
  description!: string;

  @Column()
  category!: string;
}
