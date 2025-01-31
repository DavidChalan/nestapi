import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { AlumnoModule } from './alumno/alumno.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      name: 'base1',
      type: 'mysql',
      host: process.env.URL,
      port: 3306,
      username: process.env.DBUSER,
      password: process.env.PASSWORD,
      database: process.env.DBNAME,
      autoLoadEntities: true, //Escogera todo
      synchronize: true,
    }),
    TypeOrmModule.forRoot({
      name: 'base2',
      type: 'mysql',
      host: process.env.URL,
      port: 3306,
      username: process.env.DBUSER,
      password: process.env.PASSWORD,
      database: process.env.DBNAME2,
      autoLoadEntities: true, //Escogera uno en concreto
      synchronize: true,
    }),
    UsuarioModule,
    AlumnoModule,
    BibliotecaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
