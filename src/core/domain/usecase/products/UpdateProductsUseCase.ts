import { UseCaseInterface } from '@core/common/usecase/UseCase';

export default interface UpdateProductsUseCaseInterface extends UseCaseInterface<{ id: string }, void> {}
