import { Injectable } from '@nestjs/common';
import { CreateAlumnoHaceExamenTeoricoDto } from './dto/create-alumno_hace_examen_teorico.dto';
import { UpdateAlumnoHaceExamenTeoricoDto } from './dto/update-alumno_hace_examen_teorico.dto';

@Injectable()
export class AlumnoHaceExamenTeoricoService {
  create(createAlumnoHaceExamenTeoricoDto: CreateAlumnoHaceExamenTeoricoDto) {
    return 'This action adds a new alumnoHaceExamenTeorico';
  }

  findAll() {
    return `This action returns all alumnoHaceExamenTeorico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumnoHaceExamenTeorico`;
  }

  update(id: number, updateAlumnoHaceExamenTeoricoDto: UpdateAlumnoHaceExamenTeoricoDto) {
    return `This action updates a #${id} alumnoHaceExamenTeorico`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumnoHaceExamenTeorico`;
  }
}
