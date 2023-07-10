import { UseCaseInterface } from '@core/common/usecase/UseCase';
import { CreateProductPortDto } from './dtos/CreateProductPortDto';
import { ProductsInterface } from '@core/domain/entity/product/types/ProductsInterface';

export default interface CreateProductsUseCaseInterface
  extends UseCaseInterface<CreateProductPortDto, ProductsInterface[]> {}
