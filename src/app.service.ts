import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello David!';
  }
  getCarrito(): string {
    return 'Productos en el carrito!';
  }
}
