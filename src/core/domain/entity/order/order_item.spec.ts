import { describe, expect, it } from '@jest/globals';
import Products from '../product/products';
import OrderItem from './order_item';

let product: Products;
let orderItem: OrderItem;

describe('Order Item', () => {
  const productData = {
    id: '1234',
    name: 'Hamburguer Artesanal',
    price: 20,
    description: 'Hamburguer Artesanal',
    category: 'Hamburguer',
  };
  product = new Products(productData);

  const { id, productId, quantity, price } = {
    id: '1234',
    productId: product.id,
    quantity: 2,
    price: product.price,
  };

  it('should be able to create a new Order Item', () => {
    orderItem = new OrderItem('123', productId, quantity, price);

    expect(orderItem).toBeTruthy();
    expect(orderItem).toBeInstanceOf(OrderItem);
    expect(orderItem.total).toBe(40);
  });

  it('should be not able to create a new Order Item without id', () => {
    expect(() => (orderItem = new OrderItem('', productId, quantity, price))).toThrowError('Id is required');
  });

  it('should be not able to create a new Order Item without product.id', () => {
    expect(() => (orderItem = new OrderItem(id, '', quantity, price))).toThrowError('ProductId is required');
  });

  it('should be not able to create a new Order Item with quantity less than zero', () => {
    expect(() => (orderItem = new OrderItem(id, productId, 0, price))).toThrowError('Quantity must be greater than 0');
  });

  it('should be not able to create a new Order Item without description', () => {
    expect(() => (orderItem = new OrderItem(id, productId, quantity, 0))).toThrowError('Price must be greater than 0');
  });
});
