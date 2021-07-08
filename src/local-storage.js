import Storage from './storage';
const LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

const localStorageKey = 'cartItems';

export default class CartLocalStorage extends Storage {

  constructor() {
    super()
    this.initialize();
  }
  
  async add(cartObject) {
    let existingLocalStorage = await this.getItems();
    existingLocalStorage.push(cartObject);
    localStorage.setItem(localStorageKey, JSON.stringify(existingLocalStorage));
  }

  async getItems () {
    let items = JSON.parse(localStorage.getItem(localStorageKey))
    return Promise.resolve(items)
  }

  initialize () {
    if(!JSON.parse(localStorage.getItem(localStorageKey))){
      localStorage.setItem(localStorageKey, JSON.stringify([]))
    }
  }

  clear() {
    localStorage.setItem(localStorageKey, JSON.stringify([]))
  }
}