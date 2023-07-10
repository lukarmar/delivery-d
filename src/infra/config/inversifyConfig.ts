import { AsyncContainerModule, interfaces } from 'inversify';

import { getDbConnection, AppDataSource } from '@infra/config/database';
import { TYPES } from '@core/common/constants/inversify/types';

import ProductsRepositoryInterface from '@core/domain/repository/products/productRepository.interface';
import CreateProductsUseCaseInterface from '@core/domain/usecase/products/CreateProductsUseCaseInterface';
import GetAllProductsUseCaseInterface from '@core/domain/usecase/products/GetAllProductsUseCaseInterface';

import ProductRepository from '@infra/persistence/repository/products/productsRepository';
import { CreateProductsUseCase } from '@infra/useCases/products/CreateProductsUseCase';
import { GetAllProductsUseCace } from '@infra/useCases/products/GetAllProductsUseCace';

import { Repository } from 'typeorm';
import { Products } from '@infra/persistence/models/product/productModel';
import NormalizeDataObj from '@core/common/adapters/normalizeDataObj';
import DeleteProductsUseCaseInterface from '@core/domain/usecase/products/DeleteProductsUseCase';
import { DeleteProductsUseCase } from '@infra/useCases/products/DeleteProductsUseCase';
import UpdateProductsUseCaseInterface from '@core/domain/usecase/products/UpdateProductsUseCase';
import { UpdateProductsUseCase } from '@infra/useCases/products/UpdateProductsUseCase';
import { GetOneProductUseCase } from '@infra/useCases/products/GetOneProductUseCase';
import GetOneProductUseCaseInterface from '@core/domain/usecase/products/GetOneProductUseCaseInterface';

export const bindings = new AsyncContainerModule(async (bind: interfaces.Bind) => {
  await getDbConnection();

  await require('../http/controllers/products/productsController');

  bind<Repository<Products>>(TYPES.ProductsEntity)
    .toDynamicValue(() => AppDataSource.getRepository(Products))
    .inRequestScope();

  bind<ProductsRepositoryInterface>(TYPES.ProductsRepository).to(ProductRepository);

  bind<CreateProductsUseCaseInterface>(TYPES.CreateProductsUseCase).to(CreateProductsUseCase);
  bind<GetAllProductsUseCaseInterface>(TYPES.GetAllProductsUseCase).to(GetAllProductsUseCace);
  bind<DeleteProductsUseCaseInterface>(TYPES.DeleteProductsUseCase).to(DeleteProductsUseCase);
  bind<UpdateProductsUseCaseInterface>(TYPES.UpdateProductsUseCase).to(UpdateProductsUseCase);
  bind<GetOneProductUseCaseInterface>(TYPES.GetOneProductUseCase).to(GetOneProductUseCase);

  bind<NormalizeDataObj>(TYPES.NormalizeDataObj).to(NormalizeDataObj);
});
