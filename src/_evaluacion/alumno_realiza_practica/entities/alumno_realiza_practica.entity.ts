import { Alumno } from 'src/_evaluacion/alumno/entities/alumno.entity';
import { Practica } from 'src/_evaluacion/practica/entities/practica.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
@Entity()
export class AlumnoRealizaPractica {
  @PrimaryColumn()
  id_alumno: number;
  @PrimaryColumn()
  id_practica: number;
  @Column()
  fecha: Date;
  @Column()
  nota: number;
  @ManyToOne(() => Alumno, (alumno) => alumno.alumnosRealizanPractica)
  @JoinColumn({ name: 'id_alumno' })
  alumno: Alumno;
  @ManyToOne(() => Practica, (practica) => practica.alumnosRealizanPractica)
  @JoinColumn({ name: 'id_practica' })
  practica: Practica;
}
