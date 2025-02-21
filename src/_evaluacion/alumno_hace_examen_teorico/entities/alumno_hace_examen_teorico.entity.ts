import { Alumno } from 'src/_evaluacion/alumno/entities/alumno.entity';
import { ExamenTeorico } from 'src/_evaluacion/examen_teorico/entities/examen_teorico.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class AlumnoHaceExamenTeorico {
  @PrimaryColumn()
  id_alumno: number;
  @PrimaryColumn()
  id_examen_teorico: number;
  @PrimaryColumn()
  nota: number;
  @ManyToOne(
    () => ExamenTeorico,
    (examenteorico) => examenteorico.alumnoshacenexamenteorico,
  )
  @JoinColumn({ name: 'id_examen_teorico' })
  examenteorico: AlumnoHaceExamenTeorico;
  @ManyToOne(() => Alumno, (alumno) => alumno.alumnoshacenexamenteorico)
  @JoinColumn({ name: 'id_alumno' })
  alumno: AlumnoHaceExamenTeorico;
}
