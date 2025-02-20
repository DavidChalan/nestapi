import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { users } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([users], 'base1')],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
