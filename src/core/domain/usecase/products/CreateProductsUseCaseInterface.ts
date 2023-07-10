import { UseCaseInterface } from '@core/common/usecase/UseCase';
import { CreateProductPortDto } from './dtos/CreateProductPortDto';
import { ProductsUseCaseDto } from './dtos/ProductsUseCaseDto';

export default interface CreateProductsUseCaseInterface
  extends UseCaseInterface<CreateProductPortDto, ProductsUseCaseDto> {}
