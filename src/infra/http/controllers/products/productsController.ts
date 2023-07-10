import { Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  response,
  requestBody,
  httpPost,
  httpGet,
  httpPut,
  httpDelete,
  requestParam,
} from 'inversify-express-utils';

import CreateProductsUseCaseInterface from '@core/domain/usecase/products/CreateProductsUseCaseInterface';
import GetAllProductsUseCaseInterface from '@core/domain/usecase/products/GetAllProductsUseCaseInterface';

import { TYPES } from '@core/common/constants/inversify/types';
import { Code } from '@core/common/code/Code';
import { CreateProductPortDto } from '@core/domain/usecase/products/dtos/CreateProductPortDto';
import DeleteProductsUseCaseInterface from '@core/domain/usecase/products/DeleteProductsUseCase';
import UpdateProductsUseCaseInterface from '@core/domain/usecase/products/UpdateProductsUseCase';
import { CoreApiResponse } from '@core/common/http/CoreApiResponse';

@controller('/api/v1/products')
export default class ProductsController {
  private readonly createProductUsecase: CreateProductsUseCaseInterface;
  private readonly getAllProductsUseCase: GetAllProductsUseCaseInterface;
  private readonly deleteProductUsecase: DeleteProductsUseCaseInterface;
  private readonly updateProductUsecase: UpdateProductsUseCaseInterface;

  constructor(
    @inject(TYPES.CreateProductsUseCase) createProductUsecase: CreateProductsUseCaseInterface,
    @inject(TYPES.GetAllProductsUseCase) getAllProductsUseCase: GetAllProductsUseCaseInterface,
    @inject(TYPES.DeleteProductsUseCase) deleteProductUsecase: DeleteProductsUseCaseInterface,
    @inject(TYPES.UpdateProductsUseCase) updateProductUsecase: UpdateProductsUseCaseInterface,
  ) {
    this.createProductUsecase = createProductUsecase;
    this.getAllProductsUseCase = getAllProductsUseCase;
    this.deleteProductUsecase = deleteProductUsecase;
    this.updateProductUsecase = updateProductUsecase;
  }

  @httpPost('/create')
  public async createProducts(@response() res: Response, @requestBody() newProducts: CreateProductPortDto) {
    try {
      const products = await this.createProductUsecase.execute(newProducts);

      res.status(Code.SUCCESS.status).json(products);
    } catch (error) {
      res.status(Code.BAD_REQUEST_ERROR.status).send(error);
    }
  }

  @httpGet('/')
  public async getAllProducts() {
    const products = await this.getAllProductsUseCase.execute();

    return CoreApiResponse.success(products);
  }

  @httpGet('/:id')
  public async getOneProducts(@response() res: Response, @requestParam('id') id: string) {
    try {
      const product = await this.updateProductUsecase.execute({ id });

      res.status(Code.SUCCESS.status).json(product);
    } catch (error) {
      res.status(Code.BAD_REQUEST_ERROR.status).send(error);
    }
  }

  @httpDelete('/delete/:id')
  public async deleteProducts(@response() res: Response, @requestParam('id') id: string) {
    await this.deleteProductUsecase.execute({ id });
    return CoreApiResponse.success();
  }

  @httpPut('/update/:id')
  public async updateProducts(@response() res: Response, @requestParam('id') id: string) {
    await this.updateProductUsecase.execute({ id });
    return CoreApiResponse.success();
  }
}
