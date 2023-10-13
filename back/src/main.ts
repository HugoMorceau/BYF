import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import { AppModule } from './app.module';

console.log('host : ' + process.env.DATABASE_HOST);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  await app.listen(3100);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log('Environment: ' + process.env.NODE_ENV);
  console.log('USER ' + process.env.DATABASE_USER);
}
bootstrap();
