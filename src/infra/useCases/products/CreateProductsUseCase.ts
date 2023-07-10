import { injectable, inject } from 'inversify';
import CreateProductsUseCaseInterface from '@core/domain/usecase/products/CreateProductsUseCaseInterface';
import ProductRepositoryInterface from '@core/domain/repository/products/productRepository.interface';
import { TYPES } from '@core/common/constants/inversify/types';
import { CreateProductPortDto } from '@core/domain/usecase/products/dtos/CreateProductPortDto';
import { ProductsUseCaseDto } from '@core/domain/usecase/products/dtos/ProductsUseCaseDto';
import Products from '@core/domain/entity/product/products';

@injectable()
export class CreateProductsUseCase implements CreateProductsUseCaseInterface {
  private readonly productsRepository: ProductRepositoryInterface;

  constructor(@inject(TYPES.ProductsRepository) productsRepository: ProductRepositoryInterface) {
    this.productsRepository = productsRepository;
  }
  async execute(port: CreateProductPortDto): Promise<ProductsUseCaseDto> {
    const product = new Products(port);

    return this.productsRepository.create(product);
  }
}
