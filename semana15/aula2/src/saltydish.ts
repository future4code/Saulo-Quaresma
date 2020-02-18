import { Dish } from "./dish";

export class SaltyDish extends Dish {
  constructor(
    name: string,
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    super(name, price, cost, ingredients, timeToCook);
  }

  public cook(): void {
    console.log("Starting Salty Dish")
  }
}

export const carbonara = new SaltyDish("carbonara", 50, 10, ["macarrão", "presunto", "queijo"], 30)
console.log(carbonara)
console.log(carbonara.getProfit());

carbonara.cook()
console.log("-----------------------")

export const feijoada = new SaltyDish("feijoada", 100, 20, ["feijão", "Linguiça", "carne seca"], 100);
console.log(feijoada)
console.log(feijoada.getProfit());

feijoada.cook()
