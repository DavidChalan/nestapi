import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ExamenTeorico } from './entities/examen_teorico.entity';
import { CreateExamenTeoricoDto } from './dto/create-examen_teorico.dto';
import { UpdateExamenTeoricoDto } from './dto/update-examen_teorico.dto';

@Injectable()
export class ExamenTeoricoService {
  constructor(
    @InjectRepository(ExamenTeorico, 'base1')
    private examenTeoricoRepository: Repository<ExamenTeorico>,
  ) {}

  // Método para crear un nuevo examen teórico
  async create(
    createExamenTeoricoDto: CreateExamenTeoricoDto,
  ): Promise<ExamenTeorico> {
    // Creamos una instancia de ExamenTeorico a partir del DTO
    const examenTeorico = this.examenTeoricoRepository.create(
      createExamenTeoricoDto,
    );
    // Guardamos el examen teórico en la base de datos
    return await this.examenTeoricoRepository.save(examenTeorico);
  }

  // Método para obtener todos los exámenes teóricos, incluyendo las relaciones
  async findAll(): Promise<ExamenTeorico[]> {
    // Obtenemos todos los exámenes teóricos con las relaciones
    return await this.examenTeoricoRepository.find({
      relations: ['profesor', 'alumnosHacenExamenTeorico'],
    });
  }

  // Método para obtener un examen teórico por su ID, con relaciones
  async findOne(id: number): Promise<ExamenTeorico> {
    // Buscamos el examen teórico por ID
    const examenTeorico = await this.examenTeoricoRepository.findOne({
      where: { id },
      relations: ['profesor', 'alumnosHacenExamenTeorico'],
    });
    // Si no existe, lanzamos una excepción
    if (!examenTeorico) {
      throw new NotFoundException(`Examen Teórico con ID ${id} no encontrado`);
    }
    return examenTeorico;
  }

  // Método para actualizar un examen teórico existente
  async update(
    id: number,
    updateExamenTeoricoDto: UpdateExamenTeoricoDto,
  ): Promise<ExamenTeorico> {
    // Verificamos si el examen teórico existe
    await this.findOne(id);
    // Actualizamos el examen teórico con los datos del DTO
    await this.examenTeoricoRepository.update(id, updateExamenTeoricoDto);
    // Retornamos el examen teórico actualizado
    return await this.examenTeoricoRepository.findOne({
      where: { id },
      relations: ['profesor', 'alumnosHacenExamenTeorico'],
    });
  }

  // Método para eliminar un examen teórico por su ID
  async remove(id: number): Promise<void> {
    // Intentamos eliminar el examen teórico
    const result = await this.examenTeoricoRepository.delete(id);
    // Si no se eliminó ningún registro, lanzamos una excepción
    if (result.affected === 0) {
      throw new NotFoundException(`Examen Teórico con ID ${id} no encontrado`);
    }
  }
}
