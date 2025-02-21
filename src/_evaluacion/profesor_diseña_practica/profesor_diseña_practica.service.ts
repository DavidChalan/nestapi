import { Injectable } from '@nestjs/common';
import { CreateProfesorDiseñaPracticaDto } from './dto/create-profesor_diseña_practica.dto';
import { UpdateProfesorDiseñaPracticaDto } from './dto/update-profesor_diseña_practica.dto';

@Injectable()
export class ProfesorDiseñaPracticaService {
  create(createProfesorDiseñaPracticaDto: CreateProfesorDiseñaPracticaDto) {
    return 'This action adds a new profesorDiseñaPractica';
  }

  findAll() {
    return `This action returns all profesorDiseñaPractica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profesorDiseñaPractica`;
  }

  update(id: number, updateProfesorDiseñaPracticaDto: UpdateProfesorDiseñaPracticaDto) {
    return `This action updates a #${id} profesorDiseñaPractica`;
  }

  remove(id: number) {
    return `This action removes a #${id} profesorDiseñaPractica`;
  }
}
