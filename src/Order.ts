import Item from "./Item";

export default class Order {
  items: Item[];
  constructor() {
    this.items = [];
  }
}
