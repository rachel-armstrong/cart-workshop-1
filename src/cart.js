
export default class Cart {

  constructor(storage) {
    this.storage = storage;
  }

  getItems () {
    return this.storage.getItems()
  }

  addItem(cartObject) {
    this.storage.add(cartObject)
  }

  clear() {
    this.storage.clear();
  }

  getTotal() {
    let total = 0;
    this.storage.getItems().forEach(item => {
      total += item.price * item.quantity
    });
    return total;
  }

}
