import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { BibliotecaService } from './biblioteca.service';
import { CreateBibliotecaDto } from './dto/create-biblioteca.dto';
import { UpdateBibliotecaDto } from './dto/update-biblioteca.dto';
import { biblioteca } from './entities/biblioteca.entity';
//codigo base de que insertar , borrar etc...
@Controller('biblioteca')
export class BibliotecaController {
  constructor(private readonly bibliotecaService: BibliotecaService) {}

  @Post()
  async create(
    // el async se pone por que me estoy conectando a una base de datos
    @Body() createBibliotecaDto: CreateBibliotecaDto,
  ): Promise<biblioteca> {
    return this.bibliotecaService.create(createBibliotecaDto);
  }

  @Get()
  async findAll(): Promise<biblioteca[]> {
    return this.bibliotecaService.findAll();
  }
  // Vamos a añadir una
  // función para filtrar por
  // editorial y otra por stock.
  // Podemos incluir opciones
  // en el find
  //esto es un buscador
  @Get('query1')
  async rutaQuery(
    @Query('editorial') editorial: string,
  ): Promise<biblioteca[]> {
    return this.bibliotecaService.buscaEditorial(editorial);
  }
  //Query de stock, este nos buscara un numero mayo al que le proporcionesmos
  @Get('query2')
  async rutaStock(@Query('stock') stock: number): Promise<biblioteca[]> {
    return this.bibliotecaService.buscaStockMayor(stock);
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<biblioteca> {
    return this.bibliotecaService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBibliotecaDto: UpdateBibliotecaDto,
  ): Promise<string> {
    return this.bibliotecaService.update(+id, updateBibliotecaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    return this.bibliotecaService.remove(+id);
  }
}
