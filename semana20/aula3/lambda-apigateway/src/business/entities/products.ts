export class Product {
   constructor(
      private id: string,
      private name: string,
      private image: string,
      private price: string) { }

   getId() {
      return this.id;
   }

   getName() {
      return this.name;
   }

   getImage() {
      return this.image;
   }

   getPrice() {
      return this.price;
   }
}