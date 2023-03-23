import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {


    @IsString()
    @IsUUID()
    readonly id: string;

    @IsString({ message: 'Debe ser un string' })
    @IsOptional()
    readonly brand?: string;

    @IsString({ message: 'Debe ser un string' })
    @MinLength(3, { message: 'El minimo del modelo es 3 letras' })
    readonly model: string;
}