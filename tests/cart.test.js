import makeServer from "../server";
import Cart from '../src/cart';
import MemoryStorage from "../src/memory-storage";
import CartLocalStorage from "../src/local-storage";
import CartApiStorage from "../src/api-storage";

let server;

describe("Cart", ()=> {

  beforeEach(() => {
    server = makeServer();
    let cart = new Cart(new CartLocalStorage());
    cart.clear();
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
    let items = await cart.getItems();
    expect(items).toEqual([]);
  });

  test("expect cart.total to be 0", async () => {
    let cart = new Cart(new MemoryStorage());
    let total = await cart.getTotal();
    expect(total).toBe(0);
  });

  test("add item method exists", async () => {
    let cart = new Cart(new MemoryStorage());
    expect(cart.addItem).toBeTruthy();
  });

  test("update item object", async () => {
    let cart = new Cart(new MemoryStorage());
    await cart.addItem({id: "1", quantity: 2, price: 1000});
    let items = await cart.getItems();
    expect(items).toEqual([{id: "1", quantity: 2, price: 1000}]);
  });

  test("calculating cart total", async () => {
    let cart = new Cart(new MemoryStorage());
    await cart.addItem({id: "1", quantity: 2, price: 1000});
    let total = await cart.getTotal();
    expect(total).toEqual(2000);
  });

  test("Cart accepts memory storage", async () => {
    let cart = new Cart(new MemoryStorage());
    expect(cart).toBeTruthy();
  });

  test("Can clear cart", async () => {
    let cart = new Cart(new MemoryStorage());
    await cart.addItem({id: "1", quantity: 2, price: 1000});
    cart.clear();
    let items = await cart.getItems();
    expect(items).toEqual([]);
  });

  test("Can add and get items from local storage", async () => {
    let cart = new Cart(new CartLocalStorage());
    await cart.addItem({id: "1", quantity: 2, price: 1000});
    let items = await cart.getItems();
    expect(items).toEqual([{id: "1", quantity: 2, price: 1000}]);
  });

  test("Can add and then clear items from local storage", async () => {
    let cart = new Cart(new CartLocalStorage());
    await cart.addItem({id: "1", quantity: 2, price: 1000});
    let items = await cart.getItems();
    expect(items).toEqual([{id: "1", quantity: 2, price: 1000}]);
    await cart.clear();
    let items2 = await cart.getItems();
    expect(items2).toEqual([]);
  });

  test("Can use api storage", async () => {
    let cart = new Cart(new CartApiStorage());
    let items = await cart.getItems();
    expect(items).toEqual([]);
  });

  test("Can add item using api storage", async () => {
    let cart = new Cart(new CartApiStorage());
    await cart.addItem({id: "1", quantity: 2, price: 1000});
    let items = await cart.getItems();
    expect(items).toEqual([{id: "1", quantity: 2, price: 1000}]);
  });

  test("Can add item then remove using api storage", async () => {
    let cart = new Cart(new CartApiStorage());
    await cart.addItem({id: "1", quantity: 2, price: 1000});
    let items = await cart.getItems();
    expect(items).toEqual([{id: "1", quantity: 2, price: 1000}]);
    await cart.clear();
    let items2 = await cart.getItems();
    expect(items2).toEqual([]);
  });
});