import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from './entities/profesor.entity';
import { Repository } from 'typeorm';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';

@Injectable()
export class ProfesorService {
  constructor(
    @InjectRepository(Profesor, 'base1')
    private profesorRepository: Repository<Profesor>,
  ) {}

  // Método para crear un nuevo profesor
  async create(CreateProfesorDto: CreateProfesorDto) {
    const profesor = this.profesorRepository.create(CreateProfesorDto);
    return await this.profesorRepository.save(profesor);
  }

  // Método para obtener todos los profesores
  async findAll(): Promise<Profesor[]> {
    // Obtenemos todos los profesores de la base de datos, incluyendo las relaciones
    return await this.profesorRepository.find({
      relations: ['profesorDiseñaPracticas', 'examenesTeoricos'],
    });
  }

  // Método para obtener un profesor específico por su ID
  async findOne(id: number): Promise<Profesor> {
    // Buscamos un profesor por su ID, incluyendo las relaciones
    const profesor = await this.profesorRepository.findOne({
      where: { id },
      relations: ['profesorDiseñaPracticas', 'examenesTeoricos'],
    });
    // Si no se encuentra, diremos que no se a econtrado
    if (!profesor) {
      throw new NotFoundException(`Profesor con id ${id} no encontrado`);
    }
    // Retornamos el profesor encontrado
    return profesor;
  }

  // Método para actualizar un profesor existente
  async update(
    id: number,
    updateProfesorDto: UpdateProfesorDto,
  ): Promise<Profesor> {
    // Verificamos si el profesor existe
    await this.findOne(id);
    // Actualizamos el profesor con los datos del DTO
    await this.profesorRepository.update(id, updateProfesorDto);
    // Retornamos el profesor actualizado, incluyendo las relaciones
    return await this.profesorRepository.findOne({
      where: { id },
      relations: ['profesorDiseñaPracticas', 'examenesTeoricos'],
    });
  }

  // Método para eliminar un profesor por su ID
  async remove(id: number): Promise<void> {
    // Intentamos eliminar el profesor con el ID dado
    const result = await this.profesorRepository.delete(id);
    // Si no se ha eliminado ningún registro, lanzamos una excepción
    if (result.affected === 0) {
      throw new NotFoundException(`Profesor con id ${id} no encontrado`);
    }
  }
}

//Si result.affected es igual a 0,
// significa que o se eliminó ningún registro,
// probablemente porque no existe un profesor con ese id.
