import OrderItem from './order_item';

class Order {
  private _id: string;
  private _customerId: string;
  private _items: OrderItem[] = [];
  private _total: number;

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;
    this._total = this.calcTotal();

    this.validate();
  }

  validate(): void {
    if (this._id.length === 0) {
      throw new Error('Id is required');
    }

    if (this._customerId.length === 0) {
      throw new Error('CustomerId is required');
    }

    if (this._items.length === 0) {
      throw new Error('Items are required');
    }
  }

  get total(): number {
    return this._total;
  }

  calcTotal(): number {
    return this._items.reduce((acc, item) => acc + item.total, 0);
  }
}

export default Order;
