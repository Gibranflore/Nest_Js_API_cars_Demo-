import { Body, Controller, Delete, Get, Param, 
ParseIntPipe, ParseUUIDPipe, Patch, Post} from '@nestjs/common';

import { CarsService } from './cars.service';
import { createCarDto } from 'src/cars/DTO/create-car.dto';
import { updateCarDto } from 'src/cars/DTO/update-car.dto';

// Todas las rutas van a responder al nombre de cars de este controlador
//@UsePipes(ValidationPipe)
@Controller('cars')
export class CarsController {
    //El constructor no trabaja directamente con los datos sino que los pide del service
        constructor(
            private readonly carsService: CarsService
        ) {}

    @Get()
    getCars(){
        return this.carsService.getAll();
        
    }
    // Esto es una ruta dinamica que resivira un nuero o texto
    @Get(':id')
    //Extrae el id de la url y lo convierte en numero por el ParseIntPipe
    getCarById( @Param( 'id', ParseUUIDPipe ) id: string ){
        console.log({id});
        //Busca el carro con ese Id
        return this.carsService.findOneById( id );
    }

    // @UsePipes(ValidationPipe)
    @Post()
    crateCar( @Body() createCarDto:createCarDto ){
        return this.carsService.create(createCarDto)
    }

    // PATCH Esto es una ruta que actuliazara un valor 
    @Patch(':id')
    updateCar( 
                
        //PARAM Toma el valor de la URL 'id' y lo transfomra a numero el 'ParseIntPipe'
        @Param('id', ParseUUIDPipe ) id: string,
                
        //BODY es otro decorador sirve para obtener los datos que el cielnte manda al HTTPS aqui vendran los datos para actulizar el cursor 
        @Body() updateCarDto: updateCarDto ) 
    {
        return this.carsService.update( id, updateCarDto );
    }


    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe) id: string ){
        return this.carsService.delete(id);
    }
}
