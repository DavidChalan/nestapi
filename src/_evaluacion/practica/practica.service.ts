import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Practica } from './entities/practica.entity';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';

@Injectable()
export class PracticaService {
  constructor(
    @InjectRepository(Practica, 'base1')
    private practicaRepository: Repository<Practica>,
  ) {}

  // Método para crear una nueva práctica
  async create(createPracticaDto: CreatePracticaDto): Promise<Practica> {
    // Creamos una instancia de Practica a partir del DTO
    const practica = this.practicaRepository.create(createPracticaDto);
    // Guardamos la práctica en la base de datos
    return await this.practicaRepository.save(practica);
  }

  // Método para obtener todas las prácticas, incluyendo las relaciones
  async findAll(): Promise<Practica[]> {
    // Obtenemos todas las prácticas junto con las relaciones especificadas
    return await this.practicaRepository.find({
      relations: ['alumnosRealizanPractica', 'profesorDiseñaPractica'],
    });
  }

  // Método para obtener una práctica por su ID, incluyendo las relaciones
  async findOne(id: number): Promise<Practica> {
    // Buscamos la práctica con el ID dado
    const practica = await this.practicaRepository.findOne({
      where: { id },
      relations: ['alumnoRealizaPractica', 'profesorDiseñaPractica'],
    });

    // Si la práctica no existe, lanzamos una excepción
    if (!practica) {
      throw new NotFoundException(`Práctica con ID ${id} no encontrada`);
    }

    // Retornamos la práctica encontrada
    return practica;
  }

  // Método para actualizar una práctica existente
  async update(
    id: number,
    updatePracticaDto: UpdatePracticaDto,
  ): Promise<Practica> {
    // Verificamos si la práctica existe
    await this.findOne(id);

    // Actualizamos la práctica con los datos del DTO
    await this.practicaRepository.update(id, updatePracticaDto);

    // Retornamos la práctica actualizada con sus relaciones
    return await this.practicaRepository.findOne({
      where: { id },
      relations: ['alumnoRealizaPractica', 'profesorDiseñaPractica'],
    });
  }

  // Método para eliminar una práctica por su ID
  async remove(id: number): Promise<void> {
    // Intentamos eliminar la práctica
    const result = await this.practicaRepository.delete(id);

    // Si no se eliminó ninguna práctica, lanzamos una excepción
    if (result.affected === 0) {
      throw new NotFoundException(`Práctica con ID ${id} no encontrada`);
    }
  }
}
