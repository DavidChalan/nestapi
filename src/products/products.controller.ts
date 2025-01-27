import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
interface datos {
  id?: string;
  size?: string;
}
type Product = { articulo: string; precio: number; descripcioin: string };
@Controller('products')
export class ProductsController {
  @Get()
  getHelloProducts(): string {
    return 'Total de productos en el aula DE 2ASIR';
  }
  @Get('camiseta')
  findDetalle(): string {
    return 'camisetas!!';
  }
  @Get('camiseta/roja')
  findAdios(): string {
    return 'total de camisetas rojas!!';
  }
  //   @Get(':id')
  //   findById(@Param() parametros: any): string {
  //     return `Obteniendo productos del parametro ${parametros.id}`;
  //   }
  //   @Get('hot')
  //   findhot(): string {
  //     return 'Productos calientes!';
  //   }
  //   @Get(':id/:size')
  //   findByIDSize(@Param() tipo: datos): string {
  //     return `obnteniendo productos del tipos ${tipo} y tamaño ${tamano}`;
  //   }

  @Get(':id?/:size?')
  findWithOptional(@Param() params: datos) {
    const { id, size } = params;
    if (size && id) {
      return `Item ${id} de tamaño ${size}`;
    } else if (id) {
      return `Todos los items de tamaño ${id}`;
    } else {
      return 'Todos los items';
    }
  }
  // @Post()
  // insertaProducts(
  //   @Body('articulo') producto: string,
  //   @Body('precio') precio: number,
  // ): string {
  //   return `El productoo ${producto} de precio ${precio} se a insertado correctamente`;
  // }
  @Post()
  insertaProducts(@Body() producto: Product) {
    return `El producto ${producto.articulo} de precio ${producto.precio} se a insertado correctamente`;
  }
  @Put()
  actualizaProducts(): string {
    return 'Productos ACTUALIZADOS';
  }
  @Delete()
  findProducts(): string {
    return 'Productos borrados';
  }
}
