import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlumnoHaceExamenTeorico } from './entities/alumno_hace_examen_teorico.entity';
import { CreateAlumnoHaceExamenTeoricoDto } from './dto/create-alumno_hace_examen_teorico.dto';
import { UpdateAlumnoHaceExamenTeoricoDto } from './dto/update-alumno_hace_examen_teorico.dto';

@Injectable()
export class AlumnoHaceExamenTeoricoService {
  constructor(
    @InjectRepository(AlumnoHaceExamenTeorico, 'base1')
    private readonly alumnoHaceExamenTeoricoRepository: Repository<AlumnoHaceExamenTeorico>,
  ) {}

  // Método para crear un nuevo registro
  async create(
    createAlumnoHaceExamenTeoricoDto: CreateAlumnoHaceExamenTeoricoDto,
  ): Promise<AlumnoHaceExamenTeorico> {
    const nuevoRegistro = this.alumnoHaceExamenTeoricoRepository.create(
      createAlumnoHaceExamenTeoricoDto,
    );
    return await this.alumnoHaceExamenTeoricoRepository.save(nuevoRegistro);
  }

  // Método para obtener todos los registros
  async findAll(): Promise<AlumnoHaceExamenTeorico[]> {
    return await this.alumnoHaceExamenTeoricoRepository.find({
      relations: ['alumno', 'examenTeorico'],
    });
  }

  // Método para obtener un registro específico
  async findOne(
    id_alumno: number,
    id_examen_teorico: number,
  ): Promise<AlumnoHaceExamenTeorico> {
    const registro = await this.alumnoHaceExamenTeoricoRepository.findOne({
      where: { id_alumno, id_examen_teorico },
      relations: ['alumno', 'examenTeorico'],
    });

    if (!registro) {
      throw new NotFoundException(
        `No se encontró el registro del alumno con ID ${id_alumno} en el examen teórico con ID ${id_examen_teorico}`,
      );
    }

    return registro;
  }

  // Método para actualizar un registro existente
  async update(
    id_alumno: number,
    id_examen_teorico: number,
    updateAlumnoHaceExamenTeoricoDto: UpdateAlumnoHaceExamenTeoricoDto,
  ): Promise<AlumnoHaceExamenTeorico> {
    await this.findOne(id_alumno, id_examen_teorico);

    await this.alumnoHaceExamenTeoricoRepository.update(
      { id_alumno, id_examen_teorico },
      updateAlumnoHaceExamenTeoricoDto,
    );

    return await this.findOne(id_alumno, id_examen_teorico);
  }

  // Método para eliminar un registro
  async remove(id_alumno: number, id_examen_teorico: number): Promise<void> {
    const result = await this.alumnoHaceExamenTeoricoRepository.delete({
      id_alumno,
      id_examen_teorico,
    });

    if (result.affected === 0) {
      throw new NotFoundException(
        `No se pudo eliminar el registro del alumno con ID ${id_alumno} en el examen teórico con ID ${id_examen_teorico}`,
      );
    }
  }
}
