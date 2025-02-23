import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProfesorDiseñaPracticaService } from './profesor_diseña_practica.service';
import { CreateProfesorDiseñaPracticaDto } from './dto/create-profesor_diseña_practica.dto';
import { UpdateProfesorDiseñaPracticaDto } from './dto/update-profesor_diseña_practica.dto';

@Controller('profesor-diseña-practica')
export class ProfesorDiseñaPracticaController {
  constructor(
    private profesorDiseñaPracticaService: ProfesorDiseñaPracticaService,
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

  @Get(':id_profesor/:id_practica')
  findOne(
    @Param('id_profesor') id_profesor: string,
    @Param('id_practica') id_practica: string,
  ) {
    return this.profesorDiseñaPracticaService.findOne(
      +id_profesor,
      +id_practica,
    );
  }

  @Put(':id_profesor/:id_practica')
  update(
    @Param('id_profesor') id_profesor: string,
    @Param('id_practica') id_practica: string,
    @Body() updateDto: UpdateProfesorDiseñaPracticaDto,
  ) {
    return this.profesorDiseñaPracticaService.update(
      +id_profesor,
      +id_practica,
      updateDto,
    );
  }

  @Delete(':id_profesor/:id_practica')
  remove(
    @Param('id_profesor') id_profesor: string,
    @Param('id_practica') id_practica: string,
  ) {
    return this.profesorDiseñaPracticaService.remove(
      +id_profesor,
      +id_practica,
    );
  }
}
