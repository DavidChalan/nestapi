import { Module } from '@nestjs/common';
import { ProfesorDisenaPracticaService } from './profesor_disena_practica.service';
import { ProfesorDisenaPracticaController } from './profesor_disena_practica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesorDisenaPractica } from './entities/profesor_disena_practica.entity';
import { Profesor } from '../profesor/entities/profesor.entity';
import { Practica } from '../practica/entities/practica.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [ProfesorDisenaPractica, Profesor, Practica],
      'base1',
    ),
  ],
  controllers: [ProfesorDisenaPracticaController],
  providers: [ProfesorDisenaPracticaService],
})
export class ProfesorDisenaPracticaModule {}
