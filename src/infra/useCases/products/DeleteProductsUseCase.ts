import { injectable, inject } from 'inversify';
import DeleteProductsUseCaseInterface from '@core/domain/usecase/products/DeleteProductsUseCase';
import ProductRepositoryInterface from '@core/domain/repository/products/productRepository.interface';
import { TYPES } from '@core/common/constants/inversify/types';
import { Exception } from '@core/common/exception/Exception';
import { Code } from '@core/common/code/Code';

@injectable()
export class DeleteProductsUseCase implements DeleteProductsUseCaseInterface {
  private readonly productsRepository: ProductRepositoryInterface;

  constructor(@inject(TYPES.ProductsRepository) productsRepository: ProductRepositoryInterface) {
    this.productsRepository = productsRepository;
  }
  async execute(port: { id: string }): Promise<void> {
    const productAlreadyExists = await this.productsRepository.findById(port.id);

    if (!productAlreadyExists || productAlreadyExists.deletedAt) {
      throw Exception.new({ code: Code.UNAUTHORIZED_ERROR, overrideMessage: 'Product not found' });
    }

    Object.assign(productAlreadyExists, { deletedAt: new Date() });

    await this.productsRepository.delete(productAlreadyExists);
  }
}
