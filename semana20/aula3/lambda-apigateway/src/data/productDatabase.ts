import { BaseDB } from "./baseDatabase";
import { ProductsGateway } from "../business/gateways/productsGateway";
import { Product } from "../business/entities/products";

export class ProductDB extends BaseDB implements ProductsGateway {
   private produtosTable = "produtos";

   public async createProduct(product: Product): Promise<void> {
      await this.connection.raw(`
           INSERT INTO ${this.produtosTable} (id, nome, imagem, preco)
           VALUES (
              '${product.getId()}',
              '${product.getName()}',
              '${product.getImage()}',
              '${product.getPrice()}'
           )
        `)
   };
};