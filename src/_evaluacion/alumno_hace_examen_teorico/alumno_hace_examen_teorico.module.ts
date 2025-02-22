import { Module } from '@nestjs/common';
import { AlumnoHaceExamenTeoricoService } from './alumno_hace_examen_teorico.service';
import { AlumnoHaceExamenTeoricoController } from './alumno_hace_examen_teorico.controller';
import { AlumnoHaceExamenTeorico } from './entities/alumno_hace_examen_teorico.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from '../alumno/entities/alumno.entity';
import { ExamenTeorico } from '../examen_teorico/entities/examen_teorico.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [AlumnoHaceExamenTeorico, Alumno, ExamenTeorico],
      'base1',
    ),
  ],
  controllers: [AlumnoHaceExamenTeoricoController],
  providers: [AlumnoHaceExamenTeoricoService],
})
export class AlumnoHaceExamenTeoricoModule {}
