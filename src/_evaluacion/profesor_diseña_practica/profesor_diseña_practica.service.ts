import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProfesorDiseñaPractica } from './entities/profesor_diseña_practica.entity';
import { CreateProfesorDiseñaPracticaDto } from './dto/create-profesor_diseña_practica.dto';
import { UpdateProfesorDiseñaPracticaDto } from './dto/update-profesor_diseña_practica.dto';

@Injectable()
export class ProfesorDiseñaPracticaService {
  constructor(
    @InjectRepository(ProfesorDiseñaPractica, 'base1')
    private profesorDiseñaPracticaRepository: Repository<ProfesorDiseñaPractica>,
  ) {}

  // Método para crear un nuevo registro
  async create(
    createDto: CreateProfesorDiseñaPracticaDto,
  ): Promise<ProfesorDiseñaPractica> {
    const nuevoRegistro =
      this.profesorDiseñaPracticaRepository.create(createDto);
    return await this.profesorDiseñaPracticaRepository.save(nuevoRegistro);
  }

  // Método para obtener todos los registros
  async findAll(): Promise<ProfesorDiseñaPractica[]> {
    return await this.profesorDiseñaPracticaRepository.find({
      relations: ['profesor', 'practica'],
    });
  }

  // Método para obtener un registro específico
  async findOne(
    id_profesor: number,
    id_practica: number,
  ): Promise<ProfesorDiseñaPractica> {
    const registro = await this.profesorDiseñaPracticaRepository.findOne({
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
    updateDto: UpdateProfesorDiseñaPracticaDto,
  ): Promise<ProfesorDiseñaPractica> {
    // Verificamos si el registro existe
    await this.findOne(id_profesor, id_practica);

    await this.profesorDiseñaPracticaRepository.update(
      { id_profesor, id_practica },
      updateDto,
    );

    return await this.findOne(id_profesor, id_practica);
  }

  // Método para eliminar un registro
  async remove(id_profesor: number, id_practica: number): Promise<void> {
    const result = await this.profesorDiseñaPracticaRepository.delete({
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
