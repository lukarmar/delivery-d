import { UseCaseInterface } from '@core/common/usecase/UseCase';
import { ProductsInterface } from '@core/domain/entity/product/types/ProductsInterface';

export default interface GetOneProductUseCaseInterface extends UseCaseInterface<{ id: string }, ProductsInterface> {}
