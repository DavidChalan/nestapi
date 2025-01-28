import { IsEmail, IsInt, IsString, Min, MinLength } from 'class-validator';
import { IsAccountNumber } from 'src/products/IsAccountNumberValidator';

export class ProductsDto {
  @IsString({ message: 'El articulo tiene que ser un texto' })
  @MinLength(4, { message: 'Al menos tiene que tener 4 caracteres' })
  articulo: string;
  @IsInt()
  @Min(0, { message: 'Tiene que ser positivo' })
  precio: number;
  @IsAccountNumber()
  numeroCuenta?: string;
  @IsEmail()
  email?: string;
}
