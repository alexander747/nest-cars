import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //README: para que las validaciones de los dto sean globales
  app.useGlobalPipes(
    new ValidationPipe({
      //sirve para remover la data extra que nos envian la que no ocupamos
      whitelist: true,
      // sirve para enviar un error si nos envian data extra o que esta de mas
      forbidNonWhitelisted: true
    })
  )

  await app.listen(3000);
}
bootstrap();
