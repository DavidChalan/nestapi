import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  // HttpCode,
  ParseFloatPipe,
  Post,
  Put,
} from '@nestjs/common';
// import { get } from 'http';
import { ProductsService } from './products.service';
import { Products } from './products.interface';
// import { ok } from 'assert';

@Controller('products')
export class ProductsController {
  constructor(private readonly servicioProducts: ProductsService) {}
  @Get()
  getAllProducts(): Products[] {
    return this.servicioProducts.getAll();
  }
  @Get(':id')
  getByID(@Param('id') valor: number): Products {
    return this.servicioProducts.getId(valor);
  }
  @Post()
  createProduct(
    @Body('articulo') articulo: string,
    @Body('precio', ParseFloatPipe) precio: number,
  ): { status: HttpStatus; msg: string } {
    return this.servicioProducts.insert({
      id: this.servicioProducts.getAll().length + 1,
      articulo,
      precio,
    });
  }
  @Put(':id')
  updateProduct(@Param('id') valor: number, @Body() producto: any) {
    return this.servicioProducts.update(valor, producto);
  }
  @Delete(':id')
  deletePrduct(@Param('id') valor: number): string {
    return this.servicioProducts.delete(valor);
  }
}
