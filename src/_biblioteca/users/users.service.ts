import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { admin } from './entities/user.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(admin, 'base1')
    private userRepository: Repository<admin>,
  ) {}
  async findOne(email: string): Promise<admin | undefined> {
    console.log('Buscando usuario con email:', email);
    return this.userRepository.findOne({ where: { email } });
  }
  async create(name: string, email: string, password: string): Promise<admin> {
    // const hashedPassword = await bcrypt.hash(password, 10);
    // //si no se hiciera en el login de auth habría que ponerlo aquí
    const user = this.userRepository.create({
      name,
      email,
      password,
    });
    return this.userRepository.save(user);
  }
}
