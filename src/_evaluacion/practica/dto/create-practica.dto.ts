import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePracticaDto {
  @IsNotEmpty() // este valor no puede ser NULL
  @IsString({ message: 'titulo de la practica debe ser una cadena de texto' }) // verifica que el campo sea una cadena de texto
  titulo: string;

  @IsNotEmpty() // este valor no puede ser NULL
  @IsString({ message: 'dificultad debe ser una cadena de texto' }) // verifica que el campo sea una cadena de texto
  dificultad: string;
}
