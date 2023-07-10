import { injectable, inject } from 'inversify';
import GetOneProductUseCaseInterface from '@core/domain/usecase/products/GetOneProductUseCaseInterface';
import ProductRepositoryInterface from '@core/domain/repository/products/productRepository.interface';
import { TYPES } from '@core/common/constants/inversify/types';

import { ProductsInterface } from '@core/domain/entity/product/types/ProductsInterface';
import { Exception } from '@core/common/exception/Exception';
import { Code } from '@core/common/code/Code';

@injectable()
export class GetOneProductUseCase implements GetOneProductUseCaseInterface {
  private readonly productsRepository: ProductRepositoryInterface;

  constructor(@inject(TYPES.ProductsRepository) productsRepository: ProductRepositoryInterface) {
    this.productsRepository = productsRepository;
  }
  async execute(port: { id: string }): Promise<ProductsInterface> {
    const product = await this.productsRepository.findById(port.id);

    if (!product || product.deletedAt) {
      throw Exception.new({ code: Code.UNAUTHORIZED_ERROR, overrideMessage: 'Product not found' });
    }

    return product;
  }
}
