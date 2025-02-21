import { Module } from '@nestjs/common';
import { ProfesorDiseñaPracticaService } from './profesor_diseña_practica.service';
import { ProfesorDiseñaPracticaController } from './profesor_diseña_practica.controller';

@Module({
  controllers: [ProfesorDiseñaPracticaController],
  providers: [ProfesorDiseñaPracticaService],
})
export class ProfesorDiseñaPracticaModule {}
