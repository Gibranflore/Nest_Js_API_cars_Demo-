import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

import { v7 as uuid} from 'uuid'
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

 private Brand:Brand[] = [

    // {
    //   id: uuid(),
    //   name: 'Honda',
    //   createdAt: new Date().getDate(),
    // }

 ]

 
  create(createBrandDto: CreateBrandDto) {

    const {name} = CreateBrandDto

    const brand: Brand = {

      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getDate()
    }
      this.Brand.push(brand);

    return brand;
  }

  findAll() {
    return this.Brand
  }

  findOne(id: string) {
    const brand = this.Brand.find(id => brand?.id === id)
    if (!brand) throw new NotFoundException(`This action returns a #${id} brand`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    
    let brandDB = this.findOne( id );

    this.Brand = this.Brand.map( brand => {
      if( brand.id === id ) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = { ...brandDB, ...updateBrandDto  }
        return brandDB;
      }
      return brand;
    });

    return brandDB;
  }


  remove(id: string) {
    return this.Brand = this.Brand.filter(brand => brand.id !== id)
  }

  fillCarsWithSeedData(Brand: Brand[]) {
    this.Brand = Brand;
}
}
