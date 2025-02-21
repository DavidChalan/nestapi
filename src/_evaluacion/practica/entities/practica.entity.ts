import { ProfesorDiseñaPractica } from 'src/_evaluacion/profesor_diseña_practica/entities/profesor_diseña_practica.entity';
import { Alumno } from 'src/alumno/entities/alumno.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Practica {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  titulo: string;
  @Column()
  dificultad: string;
  @ManyToOne(() => Alumno, (alumno) => alumno.practica)
  categoria: Alumno;
  @OneToMany(() => ProfesorDiseñaPractica, (psp) => psp.practica)
  proveedorSuministraPiezas: ProfesorDiseñaPractica[];
}
