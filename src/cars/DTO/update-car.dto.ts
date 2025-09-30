import { IsOptional, IsString, IsUUID } from "class-validator";

//^ los DTO siempre seran clases 
export class updateCarDto {

    @IsUUID()
    @IsString()
    @IsOptional()
    readonly id?:    string;
    
    //^Esto viene de class-validator y se escribe mal va a mandar error, aqui lo definimos como tiene que llamarse

    @IsOptional()
    @IsString({message: `Nombre incorrecto se llama "brand" `})
    readonly brand?: string;

    @IsOptional()
    @IsString({message: `Nombre incorrecto se llama "model" `})
    readonly model?: string;

    
}