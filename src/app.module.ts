import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { ProductsController } from './products/products.controller';
// import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { ClientesModule } from './clientes/clientes.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProductsModule,
    ClientesModule,
    AlumnosModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.URL,
      port: 3306,
      username: process.env.DBUSER,
      password: process.env.PASSWORD,
      database: process.env.DBNAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
