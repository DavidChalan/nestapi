import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProfesorDisenaPracticaDto {
  @IsNotEmpty({ message: 'El id del profesor no puede estar vacío' }) // este valor no puede ser NULL
  @IsNumber({}, { message: 'El id del profesor debe ser un número' }) // nos aseguramos que sea un número
  id_profesor: number;

  @IsNotEmpty({ message: 'El id de la práctica no puede estar vacío' }) // este valor no puede ser NULL
  @IsNumber({}, { message: 'El id de la práctica debe ser un número' }) // nos aseguramos que sea un número
  id_practica: number;

  @IsNotEmpty({ message: 'La fecha no puede estar vacía' }) // este valor no puede ser NULL
  @IsDate() // verifica que el campo sea una cadena de texto con formato de fecha
  fecha: Date;
}
