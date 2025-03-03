import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { AdminService } from './users.service';

@Controller('admin')
export class UserController {
  constructor(private userService: AdminService) {}
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    console.log('Datos del usuario autenticado:', req.user);
    return req.user;
  }
}
