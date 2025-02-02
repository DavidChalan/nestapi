import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UsePipes,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  async create(@Body() createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    return this.pokemonService.create(createPokemonDto);
  }

  // Endpoint para obtener todos los Pokémon
  @Get()
  async findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }

  // obtener un Pokémon por su ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Pokemon> {
    return this.pokemonService.findOne(id);
  }
  //  obtener un Pokémon por su nombre
  @Get('nombre/:nombre')
  async findByName(@Param('nombre') nombre: string): Promise<Pokemon> {
    return this.pokemonService.findByName(nombre);
  }
  //  obtener un Pokémon por su tipo
  @Get('tipo/:tipo')
  async findBytipo(@Param('tipo') tipo: string): Promise<Pokemon[]> {
    return this.pokemonService.findByTipo(tipo);
  }

  // Endpoint para actualizar un Pokémon existente
  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id') id: number,
    @Body() updatePokemonDto: UpdatePokemonDto,
  ): Promise<Pokemon> {
    return this.pokemonService.update(id, updatePokemonDto);
  }

  // Endpoint para eliminar un Pokémon por su ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ message: string }> {
    await this.pokemonService.remove(id);
    return {
      message: `El Pokémon con id ${id} ha sido eliminado correctamente`,
    };
  }
}
