import { Alumno } from 'src/_evaluacion/alumno/entities/alumno.entity';
import { ExamenTeorico } from 'src/_evaluacion/examen_teorico/entities/examen_teorico.entity';
import { Entity, JoinColumn, ManyToOne, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class AlumnoHaceExamenTeorico {
  @PrimaryColumn()
  id_alumno: number;

  @PrimaryColumn()
  id_examen_teorico: number;

  @Column()
  nota: number;

  @ManyToOne(
    () => ExamenTeorico,
    (examenTeorico) => examenTeorico.alumnoshacenexamenteorico,
  )
  @JoinColumn({ name: 'id_examen_teorico' })
  examenTeorico: ExamenTeorico;

  @ManyToOne(() => Alumno, (alumno) => alumno.alumnosHacenExamenTeorico)
  @JoinColumn({ name: 'id_alumno' })
  alumno: Alumno;
}
