import { describe, expect, it } from '@jest/globals';
import Products from './products';
import { ProductsInterface } from '@core/domain/entity/product/types/ProductsInterface';

let products: Products;

describe('Products', () => {
  const { id, name, price, description, category, createdAt }: ProductsInterface = {
    id: '1234',
    name: 'Hamburguer Artesanal',
    price: 20,
    description: 'Hamburguer Artesanal',
    category: 'Hamburguer',
    createdAt: new Date(),
  };

  it('should be able to create a new customer', () => {
    products = new Products({ id, name, price, description, category, createdAt });

    expect(products).toHaveProperty('id');
    expect(products.id).toBe(id);

    expect(products).toHaveProperty('name');
    expect(products.name).toBe(name);

    expect(products).toHaveProperty('price');
    expect(products.price).toBe(price);
  });

  it('should be not able to create a new customer without id', () => {
    expect(() => (products = new Products({ id: '', name, price, description, category, createdAt }))).toThrowError(
      'Id is required',
    );
  });

  it('should be not able to create a new customer without name', () => {
    expect(() => (products = new Products({ id, name: '', price, description, category, createdAt }))).toThrowError(
      'Name is required',
    );
  });

  it('should be not able to create a new customer with price less than zero', () => {
    expect(() => (products = new Products({ id, name, price: 0, description, category, createdAt }))).toThrowError(
      'Price must be greater than 0',
    );
  });

  it('should be not able to create a new customer without description', () => {
    expect(() => (products = new Products({ id, name, price, description: '', category, createdAt }))).toThrowError(
      'Description is required',
    );
  });

  it('should be not able to create a new customer without category', () => {
    expect(() => (products = new Products({ id, name, price, description, category: '', createdAt }))).toThrowError(
      'Category is required',
    );
  });
});
