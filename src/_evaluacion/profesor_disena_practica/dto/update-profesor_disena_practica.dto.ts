import { PartialType } from '@nestjs/mapped-types';
import { CreateProfesorDisenaPracticaDto } from './create-profesor_disena_practica.dto';

export class UpdateProfesorDisenaPracticaDto extends PartialType(
  CreateProfesorDisenaPracticaDto,
) {}
