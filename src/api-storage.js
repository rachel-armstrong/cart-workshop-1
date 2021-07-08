import Storage from './storage';

export default class CartApiStorage extends Storage {

  constructor() {
    super()
  }
  
  async add(cartObject) {
    let items = await fetch("/api/items", {
      method: "POST",
      body: JSON.stringify(cartObject),
    });
    items = await items.json();
    return Promise.resolve(items);
  }

  async getItems () {
    let items = await fetch("/api/items");
    items = await items.json();
    return Promise.resolve(items);
  }

  async clear() {
    let items = await fetch("/api/clear", {method: "POST"});
    return Promise.resolve(items)
  }
}