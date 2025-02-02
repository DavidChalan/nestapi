import { Injectable } from '@nestjs/common';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { Pelicula } from './entities/pelicula.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, Repository } from 'typeorm';

@Injectable()
export class PeliculasService {
  constructor(
    @InjectRepository(Pelicula, 'base3')
    private peliculaRepository: Repository<Pelicula>,
  ) {}
  create(CreatePeliculaDto: CreatePeliculaDto) {
    const pelicula = this.peliculaRepository.create(CreatePeliculaDto);
    return this.peliculaRepository.save(pelicula);
  }
  //Obtener todas las películas
  async findAll(): Promise<Pelicula[]> {
    return this.peliculaRepository.find();
  }
  //Buscar películas por titulo:
  findTitle(title: string): Promise<Pelicula[]> {
    return this.peliculaRepository.find({ where: { titulo: title } });
  }
  //Buscar películas por año:
  findByYearLessThan(year: number): Promise<Pelicula[]> {
    return this.peliculaRepository.find({ where: { año: LessThan(year) } });
  }
  //Crear una nueva película:
  createfile(pelicula: Pelicula): Promise<Pelicula> {
    return this.peliculaRepository.save(pelicula);
  }

  async remove(id: number): Promise<void> {
    await this.peliculaRepository.delete(id);
  }
}
