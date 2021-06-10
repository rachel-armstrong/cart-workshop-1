import makeServer from "../server";
import Cart from '../src/cart';
import MemoryStorage from "../src/memory-storage";

let server;

describe("Cart", ()=> {

  beforeEach(() => {
    server = makeServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  test("tests run", async () => {
    let cart = new Cart(new MemoryStorage());
    expect(cart).toBeTruthy();
  });

  test("expect empty array on cart.items", async () => {
    let cart = new Cart(new MemoryStorage());
    expect(cart.getItems()).toEqual([]);
  });

  test("expect cart.total to be 0", async () => {
    let cart = new Cart(new MemoryStorage());
    expect(cart.getTotal()).toBe(0);
  });

  test("add item method exists", async () => {
    let cart = new Cart(new MemoryStorage());
    expect(cart.addItem).toBeTruthy();
  });

  test("update item object", async () => {
    let cart = new Cart(new MemoryStorage());
    cart.addItem({id: "1", quantity: 2, price: 1000});
    expect(cart.getItems()).toEqual([{id: "1", quantity: 2, price: 1000}]);
  });

  test("calculating cart total", async () => {
    let cart = new Cart(new MemoryStorage());
    cart.addItem({id: "1", quantity: 2, price: 1000});
    expect(cart.getTotal()).toEqual(2000);
  });

  test("Cart accepts memory storage", async () => {
    let cart = new Cart(new MemoryStorage());
    expect(cart).toBeTruthy();
  });

  test("Can clear cart", async () => {
    let cart = new Cart(new MemoryStorage());
    cart.addItem({id: "1", quantity: 2, price: 1000});
    cart.clear();
    expect(cart.getItems()).toEqual([]);
  });
});