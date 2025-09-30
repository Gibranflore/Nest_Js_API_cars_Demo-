import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/cars.interface';
import {v7 as uuid} from 'uuid'
import { createCarDto } from 'src/cars/DTO/create-car.dto';
import { updateCarDto } from 'src/cars/DTO/update-car.dto';

//Le dice a nest que esto de puede usar como service o provedor y puede usarse en toda la aplicacion
@Injectable()
export class CarsService {
    
    private cars: Car[] = [
        // {
        //     id:     uuid(),
        //     brand: 'nissan',
        //     model: 'aveo'
        // },


    ]

    //~Esto devulve todo el array con con los valores
    getAll(){
        return this.cars
    }

    //~Esto le damos el id como parametro, busca el id del carro y que sea igual al numero que le pasemos 
    findOneById(id: string) {
        const cars =  this.cars.find(car => car.id === id)

        //~Es un error, si pedimos un id que no esta sale un 404 no found
        if (!cars) {
            throw new NotFoundException(`El numero ${uuid} no fue encontrado`);
            
        }
        return cars
    }

    //~Aqui llamamos a nuestro DTO por que cuando creamos un nuevo carro debe de tener ciertas condiciones en los nombres
    create( createCarDto: createCarDto){
        
        const newCar = {
            id: uuid(),
            ...createCarDto,
        }

        this.cars.push(newCar);

        return newCar;
    }

    update(id: string, updateCarDto: updateCarDto){

        let carDB = this.findOneById(id);

        if (updateCarDto.id && updateCarDto.id !== id) {
            throw new BadRequestException(`Error el id del carro no es valido`);
            
        }
        this.cars = this.cars.map( car => {
            if (car.id === id) {
                carDB = {...carDB, ...updateCarDto, id }
                return carDB;
            }
            return car;
        })
        return carDB
    }

    delete(id: string){
        let deleteCar = this.findOneById(id)

        this.cars = this.cars.filter(cars => cars.id !== id)
    }

    fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
    }
}
