import { Nullable } from '@core/common/types/Commontypes';

export interface ProductsInterface {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  createdAt: Date;
  updatedAt?: Nullable<Date>;
  deletedAt?: Nullable<Date>;
}
