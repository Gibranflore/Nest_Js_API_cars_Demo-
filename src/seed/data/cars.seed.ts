import { Car } from "src/cars/interfaces/cars.interface";

import {v7 as uuid} from 'uuid'

export const CARS_SEED: Car[]=[
     {
         id: uuid(),
         brand: 'Honda',
         model: 'vip'
     },
     {
         id: uuid(),
         brand: 'Toyota',
         model: 'premier'
     },
     {
         id: uuid(),
         brand: 'Huendei',
         model: 'spark'
     },
     {
         id: uuid(),
         brand: 'Tesla',
         model: 'x'
     }
]