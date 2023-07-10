import Entity from '@core/common/entity/Entity';
import { ProductsInterface } from '@core/domain/entity/product/types/ProductsInterface';

class Products extends Entity {
  private _name: string;

  private _price: number;

  private _description: string;

  private _category: string;

  private _createdAt: Date;

  private _updateAt?: Date;

  private _deletedAt?: Date;

  constructor(userPayload: ProductsInterface) {
    super();
    userPayload.id ? (this._id = userPayload.id) : null;
    this._name = userPayload.name;
    this._price = userPayload.price;
    this._description = userPayload.description;
    this._category = userPayload.category;
    this._createdAt = new Date();

    this.validate();
  }

  validate(): void {
    if (this._name.length === 0) {
      throw new Error('Name is required');
    }
    if (this._price <= 0) {
      throw new Error('Price must be greater than 0');
    }
    if (this._description.length === 0) {
      throw new Error('Description is required');
    }
    if (this._category.length === 0) {
      throw new Error('Category is required');
    }
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  get description(): string {
    return this._description;
  }

  get category(): string {
    return this._category;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updateAt(): Date | undefined {
    return this.updateAt;
  }

  get deletedAt(): Date | undefined {
    return this.deletedAt;
  }

  set changeName(name: string) {
    this._name = name;
  }

  set changePrice(price: number) {
    this._price = price;
  }

  set changeDescription(description: string) {
    this._description = description;
  }

  set changeCategory(category: string) {
    this._category = category;
  }
}

export default Products;
