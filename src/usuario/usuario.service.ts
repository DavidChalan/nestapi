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
    @InjectRepository(Usuario, 'base2')
    private usuarioRepository: Repository<Usuario>,
  ) {}
  //Crear un nuevo usuario en la base de datos.
  async create(CreateUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = this.usuarioRepository.create(CreateUsuarioDto);
    return this.usuarioRepository.save(usuario);
  }
  ///Obtener todos los usuarios de la base de datos.
  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }
  //Buscar un usuario específico por su ID.
  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });
    return usuario;
  }
  //Actualizar un usuario existente en la base de datos.
  async update(
    id: number,
    updateUsuarioDto: CreateUsuarioDto,
  ): Promise<Usuario> {
    const usuario = await this.findOne(id);
    this.usuarioRepository.merge(usuario, updateUsuarioDto);
    return this.usuarioRepository.save(usuario);
  }
  //Eliminar un usuario específico de la base de datos.
  async remove(id: number): Promise<void> {
    const usuario = await this.findOne(id);
    await this.usuarioRepository.remove(usuario);
  }
  //Buscar un usuario específico por su correo electrónico.
  async findByEmail(email: string): Promise<Usuario | void> {
    return await this.usuarioRepository.findOne({ where: { email } });
  }
  //Activar un usuario específico (establecer su estado activo a true).
  async activateUser(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });
    usuario.activo = true;
    return await this.usuarioRepository.save(usuario);
  }
  //Desactivar un usuario específico (establecer su estado activo a false).
  async desactivateUser(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });
    usuario.activo = false;
    return await this.usuarioRepository.save(usuario);
  }
}
