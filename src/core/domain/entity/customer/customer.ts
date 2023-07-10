import Address from './address';

class Customer {
  private _id: string;
  private _name: string;
  private _email: string;
  private _cpf: string;
  private _address: Address | undefined;
  private _active = false;

  constructor(id: string, name: string, email: string, cpf: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._cpf = cpf;

    this.validate();
  }

  validate(): void {
    if (this._id.length === 0) {
      throw new Error('Id is required');
    }
    if (this._name.length === 0) {
      throw new Error('Name is required');
    }
    if (this._email.length === 0) {
      throw new Error('Email is required');
    }
    if (this._cpf.length === 0) {
      throw new Error('CPF is required');
    }
  }

  activate(): void {
    if (this._address === undefined) {
      throw new Error('Address is required');
    }
    this._active = true;
  }

  deactivate(): void {
    this._active = false;
  }

  get id(): string {
    return this._id;
  }

  set Address(address: Address) {
    this._address = address;
  }

  get address(): Address | undefined {
    return this._address;
  }

  get active(): boolean {
    return this._active;
  }
}

export default Customer;
