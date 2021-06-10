import Storage from './storage';

export default class MemoryStorage extends Storage {

  constructor() {
    super()
    this.items = [];
  }
  
  add(cartObject) {
    this.items.push(cartObject);
  }

  getItems () {
    return this.items;
  }

  clear() {
    this.items = [];
  }

}