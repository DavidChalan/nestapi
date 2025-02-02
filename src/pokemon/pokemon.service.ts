import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon, 'base4')
    private pokemonRepository: Repository<Pokemon>,
  ) {}
  //crear un nuevo Pokemon
  async create(CreatePokemonDto: CreatePokemonDto): Promise<Pokemon> {
    const pokemon = this.pokemonRepository.create(CreatePokemonDto);
    return this.pokemonRepository.save(pokemon);
  }
  //obtener todos los pokemon
  async findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }
  //Obtener un pokemon por su id
  async findOne(id: number): Promise<Pokemon> {
    const pokemon = await this.pokemonRepository.findOne({ where: { id } });
    if (!pokemon) {
      throw new NotFoundException(`Pokemon con el ${id} no encontrado`);
    }
    return pokemon;
  }
  // Obtener un Pokémon por su nombre
  //ejemplo ==> http://localhost:5000/pokemon/nombre/Pikachu
  async findByName(nombre: string): Promise<Pokemon> {
    const pokemon = await this.pokemonRepository.findOne({ where: { nombre } });
    if (!pokemon) {
      throw new NotFoundException(
        `Pokemon con el nombre ${nombre} no encontrado`,
      );
    }
    return pokemon;
  }

  // Obtener un Pokémon por su tipo
  //ejemplo ==> http://localhost:5000/pokemon/tipo/Electric
  async findByTipo(tipo: string): Promise<Pokemon[]> {
    const pokemon = await this.pokemonRepository.find({ where: { tipo } });
    if (!pokemon.length) {
      throw new NotFoundException(`Pokemon con el tipo ${tipo} no encontrado`);
    }
    return pokemon;
  }

  //Actualizar un pokemon existente
  async update(
    id: number,
    updatePokemonDto: UpdatePokemonDto,
  ): Promise<Pokemon> {
    const pokemon = await this.findOne(id);
    this.pokemonRepository.merge(pokemon, updatePokemonDto);
    return this.pokemonRepository.save(pokemon);
  }
  // Eliminar un Pokémon por su ID
  async remove(id: number): Promise<void> {
    const pokemon = await this.findOne(id);
    await this.pokemonRepository.remove(pokemon);
  }
}
