import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // eslint-disable-next-line prettier/prettier
  const app = await NestFactory.create(AppModule, {cors : true});
  await app.listen(4010);
}
bootstrap();
