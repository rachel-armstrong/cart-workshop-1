import Storage from './storage';

export default class MemoryStorage extends Storage {

  constructor() {
    super()
    this.items = [];
  }
  
  async add(cartObject) {
    this.items.push(cartObject);
    return Promise.resolve();
  }

  getItems () {
    return Promise.resolve(this.items);
  }

  clear() {
    this.items = [];
  }

}