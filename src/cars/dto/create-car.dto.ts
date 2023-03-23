import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
    @IsString({ message: 'Debe ser un string' })
    readonly brand: string;

    @IsString({ message: 'Debe ser un string' })
    @MinLength(3, { message: 'El minimo del modelo es 3 letras' })
    readonly model: string;
}