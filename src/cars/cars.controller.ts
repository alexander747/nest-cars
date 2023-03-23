import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe) validacion a nivel de controlador, valida todas las peticiones
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) { }

    @Get()
    getAllCars() {
        return this.carsService.findAll()
    }

    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id: string) {
        // ParseIntPipe transforma string a number
        console.log({ id })
        return this.carsService.findOneById(id)
    }

    @Post()
    // @UsePipes(ValidationPipe) validacion a nivel de peticion
    createCar(@Body() createCarDto: CreateCarDto) {
        return this.carsService.create(createCarDto)
    }

    @Patch(':id')
    updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() UpdateCarDto: UpdateCarDto) {
        return this.carsService.update(id, UpdateCarDto)
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.delete(id)
    }

}
