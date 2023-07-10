/* eslint-disable no-unused-vars */
export interface UseCaseInterface<TUseCasePort, TUseCaseResult = TUseCasePort> {
  execute(port?: TUseCasePort): Promise<TUseCaseResult>;
}
