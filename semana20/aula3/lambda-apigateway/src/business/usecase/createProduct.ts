import { v4 } from "uuid";
import { Product } from "../entities/products";
import { ProductsGateway } from "../gateways/productsGateway";

export class CreateProductUC {
   constructor(private db: ProductsGateway) { }

   async execute(input: CreateProductInput): Promise<CreateProductOutput> {
      const productId = this.generateProductId();
      const newProduct = new Product(productId, input.name, input.image, input.price)

      await this.db.createProduct(newProduct)

      return {
         message: "Product created sucessfully."
      }
   }

   private generateProductId() {
      return v4()
   }
}

export interface CreateProductInput {
   name: string,
   image: string,
   price: string
}

export interface CreateProductOutput {
   message: string
}