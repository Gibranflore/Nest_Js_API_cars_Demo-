import { Injectable } from '@nestjs/common';
import { BRANDS_SEED } from './data/brand.seed';
import { CARS_SEED } from './data/cars.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';



@Injectable()
export class SeedService {


    constructor(
      private readonly CarsService: CarsService,
      private readonly BrandsService: BrandsService

    ) {}
  
  
  populateDB(){
    this.CarsService.fillCarsWithSeedData(CARS_SEED);
    this.BrandsService.fillCarsWithSeedData(BRANDS_SEED);
    return 'exitosoooo'
  }
}
