import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AlumnoHaceExamenTeoricoService } from './alumno_hace_examen_teorico.service';
import { CreateAlumnoHaceExamenTeoricoDto } from './dto/create-alumno_hace_examen_teorico.dto';
import { UpdateAlumnoHaceExamenTeoricoDto } from './dto/update-alumno_hace_examen_teorico.dto';

@Controller('alumno-hace-examen-teorico')
export class AlumnoHaceExamenTeoricoController {
  constructor(
    private readonly alumnoHaceExamenTeoricoService: AlumnoHaceExamenTeoricoService,
  ) {}

  @Post()
  create(
    @Body() createAlumnoHaceExamenTeoricoDto: CreateAlumnoHaceExamenTeoricoDto,
  ) {
    return this.alumnoHaceExamenTeoricoService.create(
      createAlumnoHaceExamenTeoricoDto,
    );
  }

  @Get()
  findAll() {
    return this.alumnoHaceExamenTeoricoService.findAll();
  }

  @Get(':id_alumno/:id_examen_teorico')
  findOne(
    @Param('id_alumno') id_alumno: string,
    @Param('id_examen_teorico') id_examen_teorico: string,
  ) {
    return this.alumnoHaceExamenTeoricoService.findOne(
      +id_alumno,
      +id_examen_teorico,
    );
  }

  @Put(':id_alumno/:id_examen_teorico')
  update(
    @Param('id_alumno') id_alumno: string,
    @Param('id_examen_teorico') id_examen_teorico: string,
    @Body() updateAlumnoHaceExamenTeoricoDto: UpdateAlumnoHaceExamenTeoricoDto,
  ) {
    return this.alumnoHaceExamenTeoricoService.update(
      +id_alumno,
      +id_examen_teorico,
      updateAlumnoHaceExamenTeoricoDto,
    );
  }

  @Delete(':id_alumno/:id_examen_teorico')
  remove(
    @Param('id_alumno') id_alumno: string,
    @Param('id_examen_teorico') id_examen_teorico: string,
  ) {
    return this.alumnoHaceExamenTeoricoService.remove(
      +id_alumno,
      +id_examen_teorico,
    );
  }
}
