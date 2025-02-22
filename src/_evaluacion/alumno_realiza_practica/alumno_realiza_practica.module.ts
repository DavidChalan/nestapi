import { Module } from '@nestjs/common';
import { AlumnoRealizaPracticaService } from './alumno_realiza_practica.service';
import { AlumnoRealizaPracticaController } from './alumno_realiza_practica.controller';
import { AlumnoRealizaPractica } from './entities/alumno_realiza_practica.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Practica } from '../practica/entities/practica.entity';
import { Alumno } from '../alumno/entities/alumno.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [AlumnoRealizaPractica, Practica, Alumno],
      'base1',
    ),
  ],
  controllers: [AlumnoRealizaPracticaController],
  providers: [AlumnoRealizaPracticaService],
})
export class AlumnoRealizaPracticaModule {}
