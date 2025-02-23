import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProfesorDisenaPracticaService } from './profesor_disena_practica.service';
import { CreateProfesorDisenaPracticaDto } from './dto/create-profesor_disena_practica.dto';
import { UpdateProfesorDisenaPracticaDto } from './dto/update-profesor_disena_practica.dto';

@Controller('profesor-disena-practica')
export class ProfesorDisenaPracticaController {
  constructor(
    private profesorDisenaPracticaService: ProfesorDisenaPracticaService,
  ) {}

  @Post()
  create(
    @Body() createProfesorDisenaPracticaDto: CreateProfesorDisenaPracticaDto,
  ) {
    return this.profesorDisenaPracticaService.create(
      createProfesorDisenaPracticaDto,
    );
  }

  @Get()
  findAll() {
    return this.profesorDisenaPracticaService.findAll();
  }

  @Get(':id_profesor/:id_practica')
  findOne(
    @Param('id_profesor') id_profesor: string,
    @Param('id_practica') id_practica: string,
  ) {
    return this.profesorDisenaPracticaService.findOne(
      +id_profesor,
      +id_practica,
    );
  }

  @Put(':id_profesor/:id_practica')
  update(
    @Param('id_profesor') id_profesor: string,
    @Param('id_practica') id_practica: string,
    @Body() updateDto: UpdateProfesorDisenaPracticaDto,
  ) {
    return this.profesorDisenaPracticaService.update(
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
    return this.profesorDisenaPracticaService.remove(
      +id_profesor,
      +id_practica,
    );
  }
}
