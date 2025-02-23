import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AlumnoRealizaPracticaService } from './alumno_realiza_practica.service';
import { CreateAlumnoRealizaPracticaDto } from './dto/create-alumno_realiza_practica.dto';
import { UpdateAlumnoRealizaPracticaDto } from './dto/update-alumno_realiza_practica.dto';

@Controller('alumno-realiza-practica')
export class AlumnoRealizaPracticaController {
  constructor(
    private readonly alumnoRealizaPracticaService: AlumnoRealizaPracticaService,
  ) {}

  @Post()
  create(
    @Body() createAlumnoRealizaPracticaDto: CreateAlumnoRealizaPracticaDto,
  ) {
    return this.alumnoRealizaPracticaService.create(
      createAlumnoRealizaPracticaDto,
    );
  }

  @Get()
  findAll() {
    return this.alumnoRealizaPracticaService.findAll();
  }

  @Get(':id_alumno/:id_practica')
  findOne(
    @Param('id_alumno') id_alumno: string,
    @Param('id_practica') id_practica: string,
  ) {
    return this.alumnoRealizaPracticaService.findOne(+id_alumno, +id_practica);
  }

  @Put(':id_alumno/:id_practica')
  update(
    @Param('id_alumno') id_alumno: string,
    @Param('id_practica') id_practica: string,
    @Body() updateDto: UpdateAlumnoRealizaPracticaDto,
  ) {
    return this.alumnoRealizaPracticaService.update(
      +id_alumno,
      +id_practica,
      updateDto,
    );
  }

  @Delete(':id_alumno/:id_practica')
  remove(
    @Param('id_alumno') id_alumno: string,
    @Param('id_practica') id_practica: string,
  ) {
    return this.alumnoRealizaPracticaService.remove(+id_alumno, +id_practica);
  }
}
