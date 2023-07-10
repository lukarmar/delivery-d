import { UseCaseInterface } from '@core/common/usecase/UseCase';

export default interface DeleteProductsUseCaseInterface extends UseCaseInterface<{ id: string }, void> {}
