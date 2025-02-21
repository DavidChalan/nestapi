import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnoHaceExamenTeoricoService } from './alumno_hace_examen_teorico.service';
import { CreateAlumnoHaceExamenTeoricoDto } from './dto/create-alumno_hace_examen_teorico.dto';
import { UpdateAlumnoHaceExamenTeoricoDto } from './dto/update-alumno_hace_examen_teorico.dto';

@Controller('alumno-hace-examen-teorico')
export class AlumnoHaceExamenTeoricoController {
  constructor(private readonly alumnoHaceExamenTeoricoService: AlumnoHaceExamenTeoricoService) {}

  @Post()
  create(@Body() createAlumnoHaceExamenTeoricoDto: CreateAlumnoHaceExamenTeoricoDto) {
    return this.alumnoHaceExamenTeoricoService.create(createAlumnoHaceExamenTeoricoDto);
  }

  @Get()
  findAll() {
    return this.alumnoHaceExamenTeoricoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnoHaceExamenTeoricoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumnoHaceExamenTeoricoDto: UpdateAlumnoHaceExamenTeoricoDto) {
    return this.alumnoHaceExamenTeoricoService.update(+id, updateAlumnoHaceExamenTeoricoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnoHaceExamenTeoricoService.remove(+id);
  }
}
