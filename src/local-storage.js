import Storage from './storage';
const LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');
const localStorageKey = 'cartItems';

export default class CartLocalStorage extends Storage {

  constructor() {
    super()
    let existingLocalStorage = this.getItems();
    if (!existingLocalStorage) {
      localStorage.setItem(localStorageKey, JSON.stringify([]))
    }
  }

  add(cartObject) {
    let existingLocalStorage = this.getItems();
    existingLocalStorage.push(cartObject);
    localStorage.setItem(localStorageKey, JSON.stringify(existingLocalStorage));
  }

  getItems () {
    return JSON.parse(localStorage.getItem(localStorageKey))
  }

  clear() {
    localStorage.setItem('cartItems', JSON.stringify([]))
  }
}