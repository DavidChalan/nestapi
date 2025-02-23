import { AlumnoHaceExamenTeorico } from 'src/_evaluacion/alumno_hace_examen_teorico/entities/alumno_hace_examen_teorico.entity';
import { AlumnoRealizaPractica } from 'src/_evaluacion/alumno_realiza_practica/entities/alumno_realiza_practica.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Alumno {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  nif: string;
  @Column()
  grupo: string;
  @Column()
  nombre: string;
  @Column()
  apellido_1: string;
  @Column()
  apellido_2: string;
  @OneToMany(
    () => AlumnoHaceExamenTeorico,
    (alumnoshacenexamenteorico) => alumnoshacenexamenteorico.alumno,
  )
  alumnosHacenExamenTeorico: AlumnoHaceExamenTeorico[];
  @OneToMany(() => AlumnoRealizaPractica, (arp) => arp.alumno)
  alumnosRealizanPractica: AlumnoRealizaPractica[];
}
