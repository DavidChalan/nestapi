import { AlumnoHaceExamenTeorico } from 'src/_evaluacion/alumno_hace_examen_teorico/entities/alumno_hace_examen_teorico.entity';
import { Profesor } from 'src/_evaluacion/profesor/entities/profesor.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExamenTeorico {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  titulo: string;
  @Column()
  numero_preguntas: number;
  @Column()
  fecha: Date;

  @OneToMany(() => Profesor, (profesor) => profesor.examenteoricos)
  profesor: Profesor[];
  @OneToMany(
    () => AlumnoHaceExamenTeorico,
    (alumnoshacenexamenteorico) => alumnoshacenexamenteorico.examenTeorico,
  )
  alumnoshacenexamenteorico: AlumnoHaceExamenTeorico[];
}
