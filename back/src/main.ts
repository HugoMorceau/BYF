import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import { AppModule } from './app.module';

console.log('hostt : ' + process.env.DATABASE_HOST);

async function bootstrap() {
  console.log('Starting the application bootstrap...');
  const app = await NestFactory.create(AppModule);
  console.log('Application created, adding cors...');
  app.use(cors());
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log('Environment: ' + process.env.NODE_ENV);
  console.log('USER ' + process.env.DATABASE_USER);
}
bootstrap();
