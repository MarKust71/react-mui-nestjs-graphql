import { Args, Query, Resolver } from '@nestjs/graphql';

import { Product } from './models/product';
import { ProductsService } from './products.service';
import { GetProductArgs } from './dto/args/get-product.args';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product], { nullable: 'items' })
  async getProducts(): Promise<Product[]> {
    try {
      return await this.productsService.getProducts();
    } catch (error) {
      return [];
    }
  }

  @Query(() => Product, { nullable: true })
  async getProduct(@Args() getProductArgs: GetProductArgs): Promise<Product> {
    try {
      return await this.productsService.getProduct(getProductArgs);
    } catch (error) {
      return null;
    }
  }
}
