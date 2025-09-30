import { IsString } from "class-validator";

//^ los DTO siempre seran clases 
export class createCarDto {
    //^Esto viene de class-validator y se escribe mal va a mandar error, aqui lo definimos como tiene que llamarse
    @IsString({message: `Nombre incorrecto se llama "brand" `})
    readonly brand: string;
    @IsString({message: `Nombre incorrecto se llama "model" `})
    readonly model: string;

    
}