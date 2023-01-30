import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* Validando dados da requisicao
    Precisa instalar duas dependencias:
    * class-validator
    * class-transformer
  */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //tudo que nao está no dto sera retirado do objeto request
      forbidNonWhitelisted: true, //so permite requisicoes com o corpo definido ao DTO
      transform: true, //o objeto enviado seja do tipo DTO
    }),
  );

  await app.listen(3000);
}
bootstrap();
