import { Employee } from "./employee";
import { dishes, Dish } from "./dish";

export class Chef extends Employee {
   private job: string;

   private removeDishFromMenu(dish: string) {
      dishes.map(dish => {
         if (dish === name) {
            dishes.splice(dishes.indexOf(dish), 1)
         }
      })
   }

   private addDishToMenu() {

   }

   public sayJob() {
      return this.job
   }
}