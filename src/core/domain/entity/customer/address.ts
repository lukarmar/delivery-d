class Address {
  private _street: string;
  private _number: number;
  private _zip: string;
  private _city: string;

  constructor(street: string, number: number, zip: string, city: string) {
    this._street = street;
    this._number = number;
    this._zip = zip;
    this._city = city;

    this.validate();
  }

  validate(): void {
    if (this._city.length === 0) {
      throw new Error('City is required');
    }

    if (this._street.length === 0) {
      throw new Error('Street is required');
    }

    if (this._number <= 0) {
      throw new Error('The number must be greater than zero');
    }

    if (this._zip.length === 0) {
      throw new Error('Zip is required');
    }
  }
}

export default Address;
