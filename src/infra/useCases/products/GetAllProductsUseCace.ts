import { injectable, inject } from 'inversify';
import GetAllProductsUseCaseInterface from '@core/domain/usecase/products/GetAllProductsUseCaseInterface';
import ProductRepositoryInterface from '@core/domain/repository/products/productRepository.interface';
import { TYPES } from '@core/common/constants/inversify/types';
import { ProductsInterface } from '@core/domain/entity/product/types/ProductsInterface';

@injectable()
export class GetAllProductsUseCace implements GetAllProductsUseCaseInterface {
  private readonly productsRepository: ProductRepositoryInterface;

  constructor(@inject(TYPES.ProductsRepository) productsRepository: ProductRepositoryInterface) {
    this.productsRepository = productsRepository;
  }
  async execute(): Promise<ProductsInterface[]> {
    const products = await this.productsRepository.getAll();

    return products;
  }
}
