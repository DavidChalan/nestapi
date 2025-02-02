import { IsNotEmpty, IsString, IsNumber, Length, Min } from 'class-validator';

export class CreatePokemonDto {
  @IsNotEmpty() // Nos aseguramos de que el campo no esté vacío.
  @IsString() // Nos aseguramos de que sea un texto.
  @Length(1, 50) // cade de texto esté entre 1 y 50 caracteres.
  nombre: string;

  @IsNotEmpty()
  @IsNumber() //asegura que el campo sea un número.
  @Min(0) // valor mínimo sea 0.
  altura: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  peso: number;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50) // longitud de la cadena esté entre 1 y 50 caracteres.
  tipo: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 150) //  cadena de texto esté entre 1 y 150 caracteres.
  imagen: string;
}
