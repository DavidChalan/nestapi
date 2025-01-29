import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  /** Nombre del alumno (debe ser una cadena y no estar vacío) */
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
