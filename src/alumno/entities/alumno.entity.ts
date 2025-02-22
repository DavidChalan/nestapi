import { AlumnoHaceExamenTeorico } from 'src/_evaluacion/alumno_hace_examen_teorico/entities/alumno_hace_examen_teorico.entity';
import { AlumnoRealizaPractica } from 'src/_evaluacion/alumno_realiza_practica/entities/alumno_realiza_practica.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
@Entity()
export class Alumno {
  @PrimaryGeneratedColumn() // Genera un id autoincremental, si sólo fuera clave sería @PrimaryColumn()
  id: number;
  @Column({ type: 'varchar', length: 50 })
  nombre: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column({ default: true })
  activo: boolean;
  @CreateDateColumn() // Fecha de creación automática
  fechaCreacion: Date;
  @UpdateDateColumn() // Fecha de actualización automática
  fechaActualizacion: Date;
  @OneToMany(
    () => AlumnoHaceExamenTeorico,
    (alumno_hace_examen_teorico) => alumno_hace_examen_teorico.alumno,
  )
  alumno: Alumno;
  @OneToMany(
    () => AlumnoRealizaPractica,
    (alumno_realiza_practica) => alumno_realiza_practica.alumno,
  )
  Alumno: Alumno;
}
