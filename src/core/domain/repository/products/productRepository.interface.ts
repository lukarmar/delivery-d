/* eslint-disable no-unused-vars */
import Products from '@core/domain/entity/product/products';
import RepositoryInterface from '../repository.interface';

export default interface ProductRepositoryInterface extends RepositoryInterface<Products> {
  findByName(name: string): Promise<Products | null>;
}
