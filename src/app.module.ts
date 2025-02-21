import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { AlumnoModule } from './alumno/alumno.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { ApiModule } from './api/api.module';
import { PostsModule } from './_api/posts/posts.module';
import { UsersModule } from './_api/users/users.module';
import { PracticaModule } from './evaluacion/practica/practica.module';
import { AlumnoModule } from './evaluacion/alumno/alumno.module';
import { ExamenTeoricoModule } from './evaluacion/examen-teorico/examen-teorico.module';
import { ProfesorModule } from './evaluacion/profesor/profesor.module';
import { PracticaModule } from './_evaluacion/practica/practica.module';
import { AlumnoModule } from './_evaluacion/alumno/alumno.module';
import { ExamenTeoricoModule } from './_evaluacion/examen-teorico/examen-teorico.module';
import { ProfesorModule } from './_evaluacion/profesor/profesor.module';
import { AlumnoRealizaPracticaModule } from './_evaluacion/alumno_realiza_practica/alumno_realiza_practica.module';
import { AlumnoHaceExamenTeoricoModule } from './_evaluacion/alumno_hace_examen_teorico/alumno_hace_examen_teorico.module';
import { ProfesorDiseñaPracticaModule } from './_evaluacion/profesor_diseña_practica/profesor_diseña_practica.module';
import { ExamenTeoricoModule } from './_evaluacion/examen_teorico/examen_teorico.module';

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
    PostsModule,
    UsersModule,
    PracticaModule,
    ExamenTeoricoModule,
    ProfesorModule,
    AlumnoRealizaPracticaModule,
    AlumnoHaceExamenTeoricoModule,
    ProfesorDiseñaPracticaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
