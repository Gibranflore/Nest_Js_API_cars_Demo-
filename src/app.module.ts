import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';


@Module({
  //~Se expoerta todo de carsmodule y lo manda appmodule para usarlo
  imports: [CarsModule, BrandsModule, SeedModule],
  //~Los controladores recibe las peticiones HTTPS GET | PUT etc
  controllers: [],
  //~Aqui va la logica de negocio, borrar, buscar etc
  providers: [],
})
export class AppModule {}
