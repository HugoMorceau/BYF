import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3100);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log('Environment: ' + process.env.NODE_ENV);
  console.log('USER' + process.env.DATABASE_USER);
  console.log('PORT' + process.env.PORT);
}
bootstrap();
