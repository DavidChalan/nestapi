import { Min } from 'class-validator';

export class CreateBibliotecaDto {
  titulo: string;
  autor: string;
  tema: string;
  editorial: string;
  @Min(0, { message: 'El valor de precio tiene que ser postivo' })
  stock: number;
  @Min(0, { message: 'El valor de precio tiene que ser postivo' })
  precio: number;
}
