import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProfesorDisenaPractica } from './entities/profesor_disena_practica.entity';
import { CreateProfesorDisenaPracticaDto } from './dto/create-profesor_disena_practica.dto';
import { UpdateProfesorDisenaPracticaDto } from './dto/update-profesor_disena_practica.dto';

@Injectable()
export class ProfesorDisenaPracticaService {
  constructor(
    @InjectRepository(ProfesorDisenaPractica, 'base1')
    private profesorDisenaPracticaRepository: Repository<ProfesorDisenaPractica>,
  ) {}

  // Método para crear un nuevo registro
  async create(
    createDto: CreateProfesorDisenaPracticaDto,
  ): Promise<ProfesorDisenaPractica> {
    const nuevoRegistro =
      this.profesorDisenaPracticaRepository.create(createDto);
    return await this.profesorDisenaPracticaRepository.save(nuevoRegistro);
  }

  // Método para obtener todos los registros
  async findAll(): Promise<ProfesorDisenaPractica[]> {
    return await this.profesorDisenaPracticaRepository.find({
      relations: ['profesor', 'practica'],
    });
  }

  // Método para obtener un registro específico
  async findOne(
    id_profesor: number,
    id_practica: number,
  ): Promise<ProfesorDisenaPractica> {
    const registro = await this.profesorDisenaPracticaRepository.findOne({
      where: { id_profesor, id_practica },
      relations: ['profesor', 'practica'],
    });

    if (!registro) {
      throw new NotFoundException(
        `No se encontró el registro con ID profesor ${id_profesor} y ID práctica ${id_practica}`,
      );
    }

    return registro;
  }

  // Método para actualizar un registro existente
  async update(
    id_profesor: number,
    id_practica: number,
    updateDto: UpdateProfesorDisenaPracticaDto,
  ): Promise<ProfesorDisenaPractica> {
    // Verificamos si el registro existe
    await this.findOne(id_profesor, id_practica);

    await this.profesorDisenaPracticaRepository.update(
      { id_profesor, id_practica },
      updateDto,
    );

    return await this.findOne(id_profesor, id_practica);
  }

  // Método para eliminar un registro
  async remove(id_profesor: number, id_practica: number): Promise<void> {
    const result = await this.profesorDisenaPracticaRepository.delete({
      id_profesor,
      id_practica,
    });

    if (result.affected === 0) {
      throw new NotFoundException(
        `No se pudo eliminar el registro con ID profesor ${id_profesor} y ID práctica ${id_practica}`,
      );
    }
  }
}
