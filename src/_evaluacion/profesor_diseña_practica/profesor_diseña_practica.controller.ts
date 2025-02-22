import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfesorDiseñaPracticaService } from './profesor_diseña_practica.service';
import { CreateProfesorDiseñaPracticaDto } from './dto/create-profesor_diseña_practica.dto';
import { UpdateProfesorDiseñaPracticaDto } from './dto/update-profesor_diseña_practica.dto';

@Controller('profesor-diseña-practica')
export class ProfesorDiseñaPracticaController {
  constructor(
    private readonly profesorDiseñaPracticaService: ProfesorDiseñaPracticaService,
  ) {}

  @Post()
  create(
    @Body() createProfesorDiseñaPracticaDto: CreateProfesorDiseñaPracticaDto,
  ) {
    return this.profesorDiseñaPracticaService.create(
      createProfesorDiseñaPracticaDto,
    );
  }

  @Get()
  findAll() {
    return this.profesorDiseñaPracticaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profesorDiseñaPracticaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProfesorDiseñaPracticaDto: UpdateProfesorDiseñaPracticaDto,
  ) {
    return this.profesorDiseñaPracticaService.update(
      +id,
      updateProfesorDiseñaPracticaDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profesorDiseñaPracticaService.remove(+id);
  }
}
