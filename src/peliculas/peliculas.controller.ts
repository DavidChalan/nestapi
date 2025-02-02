import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Query,
  Param,
  Delete,
} from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { Pelicula } from './entities/pelicula.entity';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';

@Controller('peliculas')
export class PeliculasController {
  constructor(private readonly peliculasService: PeliculasService) {}

  @Post()
  async create(
    @Body() createPeliculaDto: CreatePeliculaDto,
  ): Promise<Pelicula> {
    return this.peliculasService.create(createPeliculaDto);
  }
  @Get()
  //Pelicula[] --> se utilza esto cuando hay un listado []
  async findAll(): Promise<Pelicula[]> {
    return this.peliculasService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Pelicula> {
    return this.peliculasService.findOne(+id);
  }
  //buscar por titulo o año
  // ejemplo http://localhost:5000/peliculas?year=2025
  // http://localhost:5000/peliculas?title=david
  @Get('Search')
  async findByCriterial(
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
  //actualizar datos
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePeliculaDto: UpdatePeliculaDto,
  ): Promise<string> {
    return this.peliculasService.update(+id, updatePeliculaDto);
  }
  //borrar datos
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.peliculasService.remove(+id);
    return {
      message: `La pelicula con el id ${id} ha sido eliminado correctamente`,
    };
  }
}
