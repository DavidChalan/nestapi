import { Injectable } from '@nestjs/common';
import { CreateBibliotecaDto } from './dto/create-biblioteca.dto';
import { UpdateBibliotecaDto } from './dto/update-biblioteca.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { biblioteca } from './entities/biblioteca.entity';
import { MoreThan, Repository } from 'typeorm';
// aqui pondremos la promgramacion de cada uno
@Injectable()
export class BibliotecaService {
  constructor(
    //!!!conexion con la base de datos
    @InjectRepository(biblioteca, 'base1')
    private bibliotecaRepository: Repository<biblioteca>,
  ) {}
  async create(CreateBibliotecaDto: CreateBibliotecaDto): Promise<biblioteca> {
    const libro = this.bibliotecaRepository.create(CreateBibliotecaDto);
    return this.bibliotecaRepository.save(libro);
  }

  async findAll(): Promise<biblioteca[]> {
    return this.bibliotecaRepository.find();
  }

  async findOne(id: number): Promise<biblioteca> {
    return this.bibliotecaRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateBibliotecaDto: UpdateBibliotecaDto,
  ): Promise<string> {
    const libro = await this.findOne(id);
    this.bibliotecaRepository.merge(libro, updateBibliotecaDto);
    this.bibliotecaRepository.save(libro);
    return `El libro com el id=#${id} a sido modificada`;
  }

  async remove(id: number): Promise<string> {
    const libro = await this.findOne(id); //primero busacamos el libro por el id
    await this.bibliotecaRepository.remove(libro); //luego lo borraremos
    return 'Elemento de la base de datos eliminado';
  }
  //CRECION DE LA FUNCION (find)
  // Vamos a añadir una
  // función para filtrar por
  // editorial y otra por stock.
  // Podemos incluir opciones
  // en el find EJRMPLO DE USO http://localhost:5000/biblioteca/query?editorial=McGraw Hill
  async buscaEditorial(editorial: string): Promise<biblioteca[]> {
    return this.bibliotecaRepository.find({ where: { editorial } });
  }
  //BUSCAR STOCK MAYOR A
  async buscaStockMayor(stock: number): Promise<biblioteca[]> {
    return this.bibliotecaRepository.find({
      where: { stock: MoreThan(stock) },
    });
  }
}
