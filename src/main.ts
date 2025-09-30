import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const bootstrap = async() => {
  const app = await NestFactory.create(AppModule);

  //DTO para definir que campos son validos
  //Le dice a NESTJS este pipe en toda la app. service | controllers
  app.useGlobalPipes(
    //Valida automaticamente los datos contra las reglas de mis DTO
    //DTO brand = string pero manda 123 ERROR
    new ValidationPipe({
      //Elimina cualquier propidad que no esté declarada en tu DTO
      whitelist: true,
      //Lanza un erro a las campos extras que no esten declaradas
      forbidNonWhitelisted: true
    }),
  )

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
