import { Module } from '@nestjs/common';
import { AdminService } from './users.service';
import { UserController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { admin } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([admin], 'base1')],
  controllers: [UserController],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule {}
