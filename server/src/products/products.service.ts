import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

import { Product } from './models/product';
import { GetProductArgs } from './dto/args/get-product.args';

@Injectable()
export class ProductsService {
  public async getProducts(): Promise<Product[]> {
    const firestore = new admin.firestore.Firestore();

    try {
      return (await firestore.collection('products').get()).docs.map((doc) => {
        return { productId: doc.id, name: doc.data().name };
      });
    } catch (error) {
      console.log('Error:', error);
      return [];
    }
  }

  public async getProduct(getProductArgs: GetProductArgs): Promise<Product> {
    const firestore = new admin.firestore.Firestore();

    try {
      const doc = (await firestore.collection('products').get()).docs.filter(
        (doc) => doc.id === getProductArgs.productId,
      );

      if (!doc.length) return null;

      return { productId: doc[0].id, name: doc[0].data().name };
    } catch (error) {
      console.log('Error:', error);
      return null;
    }
  }
}
