import { Alumno } from 'src/_evaluacion/alumno/entities/alumno.entity';
import { Practica } from 'src/_evaluacion/practica/entities/practica.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
@Entity()
export class AlumnoRealizaPractica {
  @PrimaryColumn()
  id_alumno: number;
  @PrimaryColumn()
  id_practica: number;
  @Column()
  fecha: number;
  @PrimaryColumn()
  nota: number;
  @OneToMany(() => Alumno, (alumno) => alumno.alumnorealizapractica)
  @JoinColumn({ name: 'id_alumno' })
  alumno: Alumno;
  @OneToMany(() => Practica, (practica) => practica.AlumnoRealizaPractica)
  @JoinColumn({ name: 'id_practica' })
  practica: Practica;
}
