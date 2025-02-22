import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateProfesorDto {
  @IsNotEmpty() // este valor no puede ser NULL
  @Matches(/^\d{8}[A-Za-z]$/, {
    message: 'nif debe tener 8 números seguidos de una letra',
  }) // verifica que el NIF tenga 8 números seguidos de una letra
  nif: string;

  @IsNotEmpty() // este valor no puede ser NULL
  @IsString({ message: 'nombre debe ser una cadena de texto' }) // verifica que el campo sea una cadena de texto
  nombre: string;

  @IsNotEmpty() // este valor no puede ser NULL
  @IsString({ message: 'apellido_1 debe ser una cadena de texto' }) // verifica que el campo sea una cadena de texto
  apellido_1: string;

  @IsNotEmpty() // este valor no puede ser NULL
  @IsString({ message: 'apellido_2 debe ser una cadena de texto' }) // verifica que el campo sea una cadena de texto
  apellido_2: string;
}
