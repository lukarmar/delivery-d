class OrderItem {
  private _id: string;
  private _productId: string;
  private _quantity: number;
  private _price: number;
  private _total: number;

  constructor(id: string, productId: string, quantity: number, price: number) {
    this._id = id;
    this._productId = productId;
    this._quantity = quantity;
    this._price = price;
    this._total = this.calcTotal();

    this.validate();
  }

  validate(): void {
    if (this._quantity <= 0) {
      throw new Error('Quantity must be greater than 0');
    }

    if (this._price <= 0) {
      throw new Error('Price must be greater than 0');
    }

    if (this._productId.length === 0) {
      throw new Error('ProductId is required');
    }

    if (this._id.length === 0) {
      throw new Error('Id is required');
    }
  }

  get total(): number {
    return this._total;
  }

  calcTotal(): number {
    return this._quantity * this._price;
  }
}

export default OrderItem;
