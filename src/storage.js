export default class Storage {

  constructor() {
    if (this.constructor == Storage) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  add() {
    throw new Error("Method 'add()' must be implemented.");
  }

  clear() {
    throw new Error("Method 'clear()' must be implemented.");
  }

  removeItem() {
    throw new Error("Method 'removeItem()' must be implemented.");
  }
  
}