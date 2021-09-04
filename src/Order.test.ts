import Item from "./Item";
import Order from "./Order";

test("Deve criar um pedido", function () {
  const order = new Order();
  order.addItem(new Item("Beer", "Cacildes", 10));
  order.addItem(new Item("Whisky", "Jack Daniels", 100));
  order.addItem(new Item("Water", "Crystal", 1));
  const total = order.getTotal();
  expect(total).toBe(111);
});
