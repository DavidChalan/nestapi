import { Module } from '@nestjs/common';
import { ProfesorDiseñaPracticaService } from './profesor_diseña_practica.service';
import { ProfesorDiseñaPracticaController } from './profesor_diseña_practica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesorDiseñaPractica } from './entities/profesor_diseña_practica.entity';
import { Profesor } from '../profesor/entities/profesor.entity';
import { Practica } from '../practica/entities/practica.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [ProfesorDiseñaPractica, Profesor, Practica],
      'base1',
    ),
  ],
  controllers: [ProfesorDiseñaPracticaController],
  providers: [ProfesorDiseñaPracticaService],
})
export class ProfesorDiseñaPracticaModule {}
