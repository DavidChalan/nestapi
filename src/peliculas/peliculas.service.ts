import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { Pelicula } from './entities/pelicula.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, Repository } from 'typeorm';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';

@Injectable()
export class PeliculasService {
  constructor(
    @InjectRepository(Pelicula, 'base3')
    private peliculaRepository: Repository<Pelicula>,
  ) {}
  //crear una pelicula
  async create(CreatePeliculaDto: CreatePeliculaDto): Promise<Pelicula> {
    const pelicula = this.peliculaRepository.create(CreatePeliculaDto);
    return this.peliculaRepository.save(pelicula);
  }
  //Obtener todas las películas
  async findAll(): Promise<Pelicula[]> {
    return this.peliculaRepository.find();
  }
  //Buscar peliculas por id
  async findOne(id: number): Promise<Pelicula> {
    const pelicula = await this.peliculaRepository.findOne({ where: { id } });
    if (!pelicula) {
      throw new NotFoundException(`Película con id ${id} no encontrada`);
    }
    return pelicula;
  }
  //Buscar películas por titulo:
  findTitle(title: string): Promise<Pelicula[]> {
    return this.peliculaRepository.find({ where: { titulo: title } });
  }
  //Buscar películas por año:
  findByYearLessThan(year: number): Promise<Pelicula[]> {
    return this.peliculaRepository.find({ where: { año: LessThan(year) } });
  }
  //actualizar  pelicula
  async update(
    id: number,
    UpdatePeliculaDto: UpdatePeliculaDto,
  ): Promise<string> {
    const pelicula = await this.findOne(id);
    this.peliculaRepository.merge(pelicula, UpdatePeliculaDto);
    this.peliculaRepository.save(pelicula);
    return `El libro con el id ${id} ha sido modificado`;
  }
  //eliminar pelicula
  async remove(id: number): Promise<string> {
    await this.peliculaRepository.delete(id);
    return `la pelicula con el id ${id} ha sido eliminado correctamente`;
  }
}
