import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Alumno } from './entities/alumno.entity';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';

@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(Alumno, 'base1')
    private readonly alumnoRepository: Repository<Alumno>,
  ) {}

  // Método para crear un nuevo alumno
  async create(createAlumnoDto: CreateAlumnoDto): Promise<Alumno> {
    // Creamos una instancia de Alumno a partir del DTO
    const alumno = this.alumnoRepository.create(createAlumnoDto);
    // Guardamos el alumno en la base de datos
    return await this.alumnoRepository.save(alumno);
  }

  // Método para obtener todos los alumnos, incluyendo las relaciones
  async findAll(): Promise<Alumno[]> {
    // Obtenemos todos los alumnos junto con las relaciones especificadas
    return await this.alumnoRepository.find({
      relations: ['alumnoshacenexamenteorico', 'alumnorealizapractica'],
    });
  }

  // Método para obtener un alumno por su ID, incluyendo las relaciones
  async findOne(id: number): Promise<Alumno> {
    return await this.alumnoRepository.findOne({
      where: { id },
      relations: ['alumnoshacenexamenteorico', 'alumnorealizapractica'],
    });
  }

  // Método para actualizar un alumno existente
  async update(id: number, updateAlumnoDto: UpdateAlumnoDto): Promise<Alumno> {
    await this.alumnoRepository.update(id, updateAlumnoDto);
    // Retornamos el alumno actualizado con sus relaciones
    return await this.alumnoRepository.findOne({
      where: { id },
      relations: ['alumnoshacenexamenteorico', 'alumnorealizapractica'],
    });
  }

  // Método para eliminar un alumno
  async remove(id: number): Promise<void> {
    await this.alumnoRepository.delete(id);
  }
}
