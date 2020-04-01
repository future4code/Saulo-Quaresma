import { Product } from "../entities/products";

export interface ProductsGateway {
   createProduct(product: Product): Promise<void>
}