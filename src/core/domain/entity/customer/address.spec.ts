import { describe, expect, it } from '@jest/globals';
import Address from './address';

let address: Address;

describe('Address', () => {
  const { street, number, zip, city } = {
    street: 'Rua Filomena',
    number: 123,
    zip: '24440900',
    city: 'Rio de Janeiro',
  };

  it('should be able to create a new address', () => {
    address = new Address(street, number, zip, city);

    expect(address).toBeTruthy();
    expect(address).toBeInstanceOf(Address);
  });

  it('should not be able to activate a address without city', () => {
    expect(() => (address = new Address(street, number, zip, ''))).toThrowError('City is required');
  });

  it('should not be able to activate a address without street', () => {
    expect(() => (address = new Address('', number, zip, city))).toThrowError('Street is required');
  });

  it('should not be able to activate a address with number less than zero', () => {
    expect(() => (address = new Address(street, 0, zip, city))).toThrowError('The number must be greater than zero');
  });

  it('should not be able to activate a address without zip', () => {
    expect(() => (address = new Address(street, number, '', city))).toThrowError('Zip is required');
  });
});
