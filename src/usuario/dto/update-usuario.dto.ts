import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  /** Correo electrónico del alumno (debe ser un email válido y no estar vacío) */
  @IsEmail()
  @IsNotEmpty()
  email: string;

  /** Contraseña del alumno (mínimo 6 caracteres, no puede estar vacía) */
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
  activo?: boolean;
}
