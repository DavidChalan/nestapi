import { Practica } from 'src/_evaluacion/practica/entities/practica.entity';
import { Profesor } from 'src/_evaluacion/profesor/entities/profesor.entity';
import { Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class ProfesorDiseñaPractica {
  @PrimaryColumn()
  id_profesor: number;
  @PrimaryColumn()
  id_practica: number;
  @PrimaryColumn()
  fecha: Date;
  @OneToMany(() => Profesor, (Profesor) => Profesor.profesorDiseñaPractica)
  @JoinColumn({ name: 'id_profesor' })
  profesor: Profesor;
  @OneToMany(() => Practica, (practica) => practica.profesorDiseñaPractica)
  @JoinColumn({ name: 'id_practica' })
  practica: Practica;
}
