import { Dish } from "./dish";

export class Dessert extends Dish {
  public slicesNumber: number;
  constructor(
    name: string,
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number,
    slicesNumber: number
  ) {
    super(name, price, cost, ingredients, timeToCook);
    this.slicesNumber = slicesNumber;
  }

  public getSlicePrice(): number {
    return this.price / this.slicesNumber;
  }

  public cook(): void {
    console.log("Baking Dessert");
  }
}

export const brigadeiro = new Dessert("brigadeiro", 5, 1, ["chocolate", "leite condensado", "chocolate granulado"], 30, 10)
console.log(brigadeiro)
console.log(brigadeiro.getProfit());
console.log(brigadeiro.getSlicePrice());

brigadeiro.cook()
console.log("-----------------------")

export const pudim = new Dessert("pudim", 7, 2, ["leite", "leite condensado", "calda de açúcar"], 45, 20)
console.log(pudim)
console.log(pudim.getProfit());
console.log(pudim.getSlicePrice());

pudim.cook()
