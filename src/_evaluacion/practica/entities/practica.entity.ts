import { AlumnoRealizaPractica } from 'src/_evaluacion/alumno_realiza_practica/entities/alumno_realiza_practica.entity';
import { ProfesorDiseñaPractica } from 'src/_evaluacion/profesor_diseña_practica/entities/profesor_diseña_practica.entity';
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
  alumnoRealizaPractica: AlumnoRealizaPractica[];

  @OneToMany(
    () => ProfesorDiseñaPractica,
    (profesordiseñapractica) => profesordiseñapractica.practica,
  )
  profesorDiseñaPractica: ProfesorDiseñaPractica[];
}
