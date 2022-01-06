import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import 'dotenv/config';
import { firebaseConfig } from './config/firebase.config';

async function bootstrap() {
  if (!admin.apps.length) {
    admin.initializeApp(firebaseConfig);
  }
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
