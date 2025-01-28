import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  // HttpCode,
  // ParseFloatPipe,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
// import { get } from 'http';
import { ProductsService } from './products.service';
import { Products } from './products.interface';
import { ProductsDto } from './dto/products.dto/products.dto';
// import { ok } from 'assert';

@Controller('products')
export class ProductsController {
  constructor(private readonly servicioProducts: ProductsService) {}
  @Get()
  getAllProducts(): Products[] {
    return this.servicioProducts.getAll();
  }
  @Get('total')
  getTotal() {
    return `El array tiene: ${this.servicioProducts.total()} elemtos`;
  }
  @Get(':id')
  getId(@Param('id', ParseIntPipe) id: number): Products {
    return this.servicioProducts.findOne(id);
  }
  @Post()
  createProduct(@Body() producto: ProductsDto): {
    status: HttpStatus;
    msg: string;
  } {
    return this.servicioProducts.insert({
      id: this.servicioProducts.getAll().length + 1,
      articulo: producto.articulo,
      precio: producto.precio,
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
