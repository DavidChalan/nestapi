import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
// import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  // conexion con la base de datos
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}
  async create(CreateUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = this.usuarioRepository.create(CreateUsuarioDto);
    return this.usuarioRepository.save(usuario);
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });
    return usuario;
  }

  async update(
    id: number,
    updateUsuarioDto: CreateUsuarioDto,
  ): Promise<Usuario> {
    const usuario = await this.findOne(id);
    this.usuarioRepository.merge(usuario, updateUsuarioDto);
    return this.usuarioRepository.save(usuario);
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
