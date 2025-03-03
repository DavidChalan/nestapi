import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { ApiModule } from './api/api.module';
import { PracticaModule } from './_evaluacion/practica/practica.module';
import { AlumnoModule } from './_evaluacion/alumno/alumno.module';
import { ProfesorModule } from './_evaluacion/profesor/profesor.module';
import { AlumnoRealizaPracticaModule } from './_evaluacion/alumno_realiza_practica/alumno_realiza_practica.module';
import { AlumnoHaceExamenTeoricoModule } from './_evaluacion/alumno_hace_examen_teorico/alumno_hace_examen_teorico.module';
import { ProfesorDisenaPracticaModule } from './_evaluacion/profesor_disena_practica/profesor_disena_practica.module';
import { ExamenTeoricoModule } from './_evaluacion/examen_teorico/examen_teorico.module';
import { AutorModule } from './_biblioteca/autor/autor.module';
import { LibroModule } from './_biblioteca/libro/libro.module';
import { AuthModule } from './_biblioteca/auth/auth.module';
import { AdminModule } from './_biblioteca/users/users.module';

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
    TypeOrmModule.forRoot({
      name: 'base3',
      type: 'mysql',
      host: process.env.URL,
      port: 3306,
      username: process.env.DBUSER,
      password: process.env.PASSWORD,
      database: process.env.DBNAME3,
      autoLoadEntities: true, //Escogera uno en concreto
      synchronize: true,
    }),
    TypeOrmModule.forRoot({
      name: 'base4',
      type: 'mysql',
      host: process.env.URL,
      port: 3306,
      username: process.env.DBUSER,
      password: process.env.PASSWORD,
      database: process.env.DBNAME4,
      autoLoadEntities: true, //Escogera uno en concreto
      synchronize: true,
    }),
    UsuarioModule,
    AlumnoModule,
    BibliotecaModule,
    PeliculasModule,
    PokemonModule,
    ApiModule,
    PracticaModule,
    ExamenTeoricoModule,
    ProfesorModule,
    AlumnoRealizaPracticaModule,
    AlumnoHaceExamenTeoricoModule,
    ProfesorDisenaPracticaModule,
    ProfesorDisenaPracticaModule,
    AutorModule,
    LibroModule,
    AuthModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
