
export default class Cart {

  constructor(storage) {
    this.storage = storage;
  }

  getItems () {
    return Promise.resolve(this.storage.getItems());
  }

  addItem(cartObject) {
    return Promise.resolve(this.storage.add(cartObject));
  }

  clear() {
    return Promise.resolve(this.storage.clear());
  }

  async getTotal() {
    let total = 0;
    let items = await this.storage.getItems();
    items.forEach(item => {
      total += item.price * item.quantity
    });
    return Promise.resolve(total);
  }

}
