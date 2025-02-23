import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExamenTeoricoDto {
  @IsNotEmpty({ message: 'El título no puede estar vacío' })
  @IsString({ message: 'El título debe ser una cadena de texto' })
  titulo: string;

  @IsNotEmpty({ message: 'El número de preguntas no puede estar vacío' })
  @IsNumber({}, { message: 'El número de preguntas debe ser un número' })
  numero_preguntas: number;

  @IsNotEmpty({ message: 'La fecha no puede estar vacía' })
  @Type(() => Date)
  @IsDate()
  fecha: Date;
}
