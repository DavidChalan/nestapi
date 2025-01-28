import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { ProductsController } from './products/products.controller';
// import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { ClientesModule } from './clientes/clientes.module';
import { AlumnosModule } from './alumnos/alumnos.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProductsModule,
    ClientesModule,
    AlumnosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
