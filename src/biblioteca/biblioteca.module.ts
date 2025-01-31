import { Module } from '@nestjs/common';
import { BibliotecaService } from './biblioteca.service';
import { BibliotecaController } from './biblioteca.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { biblioteca } from './entities/biblioteca.entity';

@Module({
  imports: [TypeOrmModule.forFeature([biblioteca], 'base1')],
  controllers: [BibliotecaController],
  providers: [BibliotecaService],
})
export class BibliotecaModule {}
