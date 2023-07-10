import { describe, expect, it } from '@jest/globals';
import Customer from './customer';
import Address from './address';

let customer: Customer;

describe('Customer', () => {
  const { id, name, email, cpf } = {
    id: '1234',
    name: 'John Doe',
    email: 'john@email.com',
    cpf: '123.456.789-00',
  };

  it('should be able to create a new customer', () => {
    customer = new Customer(id, name, email, cpf);

    expect(customer).toHaveProperty('id');
    expect(customer.id).toBe(id);
  });

  it('should be able to add a new address', () => {
    const customer = new Customer(id, name, email, cpf);
    const address = new Address('Rua Filomena', 123, '24330000', 'Rio de Janeiro');

    customer.Address = address;

    expect(customer.address).toEqual(address);
  });

  it('should be able to activate a customer', () => {
    const customer = new Customer(id, name, email, cpf);
    const address = new Address('Rua Filomena', 123, '24330000', 'Rio de Janeiro');

    customer.Address = address;
    customer.activate();

    expect(customer.active).toBeTruthy();
  });

  it('should be able to deactivate a customer', () => {
    const customer = new Customer(id, name, email, cpf);
    const address = new Address('Rua Filomena', 123, '24330000', 'Rio de Janeiro');

    customer.Address = address;
    customer.activate();

    customer.deactivate();

    expect(customer.deactivate()).toBeFalsy();
  });

  it('should not be able to activate a customer without address', () => {
    const customer = new Customer(id, name, email, cpf);

    expect(() => customer.activate()).toThrowError('Address is required');
  });

  it('should be not able to create a new customer without id', () => {
    expect(() => (customer = new Customer('', name, email, cpf))).toThrowError('Id is required');
  });

  it('should be not able to create a new customer without name', () => {
    expect(() => (customer = new Customer(id, '', email, cpf))).toThrowError('Name is required');
  });

  it('should be not able to create a new customer without email', () => {
    expect(() => (customer = new Customer(id, name, '', cpf))).toThrowError('Email is required');
  });

  it('should be not able to create a new customer without cpf', () => {
    expect(() => (customer = new Customer(id, name, email, ''))).toThrowError('CPF is required');
  });
});
