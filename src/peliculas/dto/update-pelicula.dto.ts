import { PartialType } from '@nestjs/mapped-types';
import { CreatePeliculaDto } from './create-pelicula.dto';

export class UpdatePeliculaDto extends PartialType(CreatePeliculaDto) {
  titulo: string;
  año: number;
  autor: string;
  tema: string;
  director: string;
}
