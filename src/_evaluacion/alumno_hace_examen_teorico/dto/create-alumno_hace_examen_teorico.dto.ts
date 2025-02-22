import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class CreateAlumnoHaceExamenTeoricoDto {
  @IsNotEmpty({ message: 'El id_alumno no puede estar vacío' }) // este valor no puede ser NULL
  @IsNumber({}, { message: 'El id del alumno debe ser un número' }) // nos aseguramos que sea un número
  id_alumno: number;

  @IsNotEmpty({ message: 'El id_examen_teorico no puede estar vacío' }) // este valor no puede ser NULL
  @IsNumber({}, { message: 'El id del examen_teorico debe ser un número' }) // nos aseguramos que sea un número
  id_examen_teorico: number;

  @IsNotEmpty({ message: 'La nota no puede estar vacía' }) // este valor no puede ser NULL
  @IsNumber({}, { message: 'La nota debe ser un número' }) // nos aseguramos que sea un número
  @Min(0, { message: 'La nota debe ser al menos 0' }) // rango mínimo para la nota
  @Max(10, { message: 'La nota no puede ser mayor que 10' }) // rango máximo para la nota
  nota: number;
}
