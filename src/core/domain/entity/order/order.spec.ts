import { describe, expect, it } from '@jest/globals';
import Products from '../product/products';
import OrderItem from './order_item';
import Order from './order';

let product: Products;
let orderItem: OrderItem;
let order: Order;

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

  orderItem = new OrderItem(id, productId, quantity, price);

  it('should be able to create a new Order', () => {
    order = new Order('123', '123', [orderItem]);

    expect(order).toBeDefined();
    expect(order.total).toBe(40);
  });

  it('should be not able to create a new Order without id', () => {
    expect(() => (order = new Order('', '123', [orderItem]))).toThrowError('Id is required');
  });

  it('should be not able to create a new Order without customer.id', () => {
    expect(() => (order = new Order('123', '', [orderItem]))).toThrowError('CustomerId is required');
  });

  it('should be not able to create a new Order without Items', () => {
    expect(() => (order = new Order('123', '123', []))).toThrowError('Items are required');
  });
});
