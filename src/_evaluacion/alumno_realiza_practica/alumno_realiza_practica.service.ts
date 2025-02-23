import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlumnoRealizaPractica } from './entities/alumno_realiza_practica.entity';
import { Repository } from 'typeorm';
import { CreateAlumnoRealizaPracticaDto } from './dto/create-alumno_realiza_practica.dto';
import { UpdateAlumnoRealizaPracticaDto } from './dto/update-alumno_realiza_practica.dto';

@Injectable()
export class AlumnoRealizaPracticaService {
  constructor(
    @InjectRepository(AlumnoRealizaPractica, 'base1')
    private readonly alumnoRealizaPracticaRepository: Repository<AlumnoRealizaPractica>,
  ) {}

  // Método para crear un nuevo registro
  async create(
    createAlumnoRealizaPracticaDto: CreateAlumnoRealizaPracticaDto,
  ): Promise<AlumnoRealizaPractica> {
    const nuevoRegistro = this.alumnoRealizaPracticaRepository.create(
      createAlumnoRealizaPracticaDto,
    );
    return await this.alumnoRealizaPracticaRepository.save(nuevoRegistro);
  }

  // Método para obtener todos los registros
  async findAll(): Promise<AlumnoRealizaPractica[]> {
    return await this.alumnoRealizaPracticaRepository.find({
      relations: ['alumno', 'practica'],
    });
  }

  // Método para obtener un registro específico
  async findOne(
    id_alumno: number,
    id_practica: number,
  ): Promise<AlumnoRealizaPractica> {
    const registro = await this.alumnoRealizaPracticaRepository.findOne({
      where: { id_alumno, id_practica },
      relations: ['alumno', 'practica'],
    });

    if (!registro) {
      throw new NotFoundException(
        `No se encontró el registro del alumno con ID ${id_alumno} en la práctica con ID ${id_practica}`,
      );
    }

    return registro;
  }

  // Método para actualizar un registro existente
  async update(
    id_alumno: number,
    id_practica: number,
    updateAlumnoRealizaPracticaDto: UpdateAlumnoRealizaPracticaDto,
  ): Promise<AlumnoRealizaPractica> {
    // Verificamos si el registro existe
    await this.findOne(id_alumno, id_practica);

    await this.alumnoRealizaPracticaRepository.update(
      { id_alumno, id_practica },
      updateAlumnoRealizaPracticaDto,
    );

    return await this.findOne(id_alumno, id_practica);
  }

  // Método para eliminar un registro
  async remove(id_alumno: number, id_practica: number): Promise<void> {
    const result = await this.alumnoRealizaPracticaRepository.delete({
      id_alumno,
      id_practica,
    });

    if (result.affected === 0) {
      throw new NotFoundException(
        `No se pudo eliminar el registro del alumno con ID ${id_alumno} en la práctica con ID ${id_practica}`,
      );
    }
  }
}
