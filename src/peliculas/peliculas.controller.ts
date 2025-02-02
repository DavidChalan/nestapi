import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
  // Put,
  Query,
  Param,
  Delete,
} from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
// import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
// import { query } from 'express';
// import { title } from 'process';
import { Pelicula } from './entities/pelicula.entity';

@Controller('peliculas')
export class PeliculasController {
  constructor(private readonly peliculasService: PeliculasService) {}

  @Post()
  create(@Body() createPeliculaDto: CreatePeliculaDto) {
    return this.peliculasService.create(createPeliculaDto);
  }

  @Get()
  findByCriterial(
    @Query('title') title: string,
    @Query('year') year: number,
  ): Promise<Pelicula[]> {
    if (title) {
      return this.peliculasService.findTitle(title);
    } else if (year) {
      return this.peliculasService.findByYearLessThan(year);
    }
    return Promise.resolve([]);
  }

  @Get()
  async findAll(): Promise<Pelicula[]> {
    return this.peliculasService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.peliculasService.findOne(+id);
  // }

  // @Put(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updatePeliculaDto: UpdatePeliculaDto,
  // ) {
  //   return this.peliculasService.update(+id, updatePeliculaDto);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.peliculasService.remove(+id);
    return {
      message: `La pelicula con el id ${id} ha sido eliminado correctamente`,
    };
  }
}
