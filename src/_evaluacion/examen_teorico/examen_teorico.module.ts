import { Module } from '@nestjs/common';
import { ExamenTeoricoService } from './examen_teorico.service';
import { ExamenTeoricoController } from './examen_teorico.controller';

@Module({
  controllers: [ExamenTeoricoController],
  providers: [ExamenTeoricoService],
})
export class ExamenTeoricoModule {}
