import { AlumnoRealizaPractica } from 'src/_evaluacion/alumno_realiza_practica/entities/alumno_realiza_practica.entity';
import { ProfesorDisenaPractica } from 'src/_evaluacion/profesor_disena_practica/entities/profesor_disena_practica.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Practica {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  titulo: string;
  @Column()
  dificultad: string;
  @OneToMany(
    () => AlumnoRealizaPractica,
    (alumnorealizapractica) => alumnorealizapractica.practica,
  )
  alumnosRealizanPractica: AlumnoRealizaPractica[];

  @OneToMany(
    () => ProfesorDisenaPractica,
    (profesordisenapractica) => profesordisenapractica.practica,
  )
  profesorDisenaPractica: ProfesorDisenaPractica[];
}
