import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field()
  productId: string;

  @Field()
  name: string;
}
