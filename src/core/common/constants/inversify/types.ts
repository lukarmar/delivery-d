export const TYPES = {
  // Instances Entities
  ProductsEntity: Symbol('ProductsEntity'),

  // Repositories
  ProductsRepository: Symbol('ProductsRepository'),

  // UseCases
  CreateProductsUseCase: Symbol('CreateProductsUseCase'),
  GetAllProductsUseCase: Symbol('GetAllProductsUseCase'),
  DeleteProductsUseCase: Symbol('DeleteProductsUseCase'),
  UpdateProductsUseCase: Symbol('UpdateProductsUseCase'),
  GetOneProductUseCase: Symbol('GetOneProductUseCase'),

  // Commons
  NormalizeDataObj: Symbol('NormalizeDataObj'),
};
