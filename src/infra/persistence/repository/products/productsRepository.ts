import { DeepPartial, Repository } from 'typeorm';
import ProductRepositoryInterface from '@core/domain/repository/products/productRepository.interface';
import Products from '@core/domain/entity/product/products';

import { injectable, inject } from 'inversify';
import { TYPES } from '@core/common/constants/inversify/types';

@injectable()
export default class ProductRepository implements ProductRepositoryInterface {
  private readonly productsRepository: Repository<Products>;

  constructor(@inject(TYPES.ProductsEntity) productsRepository: Repository<Products>) {
    this.productsRepository = productsRepository;
  }

  async create(entity: Products): Promise<Products> {
    const { name, description, price, category } = entity;

    const result = await this.productsRepository
      .createQueryBuilder('products')
      .insert()
      .values({
        name,
        description,
        price,
        category,
      })
      .returning('*')
      .execute();
    return this.productsRepository.create(result.generatedMaps[0] as DeepPartial<Products>);
  }
  async update(entity: Products): Promise<void> {
    await this.productsRepository
      .createQueryBuilder('products')
      .update()
      .set({ ...entity })
      .where('products.id = :id', { id: entity.id })
      .execute();
  }
  async findById(id: string): Promise<Products | null> {
    const product = await this.productsRepository
      .createQueryBuilder('products')
      .where('products.id = :id', { id })
      .getOne();

    return product;
  }
  async getAll(): Promise<Products[]> {
    const products = await this.productsRepository.createQueryBuilder('products').getMany();
    return products;
  }
  async findByName(name: string): Promise<Products | null> {
    const findProduct = await this.productsRepository
      .createQueryBuilder('products')
      .select('*')
      .where('products.name = :name', { name })
      .getOne();

    return findProduct;
  }

  async delete(entity: Products): Promise<void> {
    Object.assign(entity, { deletedAt: new Date().toISOString() });

    await this.update(entity);
  }
}
