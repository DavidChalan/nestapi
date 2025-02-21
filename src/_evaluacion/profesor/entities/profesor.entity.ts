import { ExamenTeorico } from 'src/_evaluacion/examen_teorico/entities/examen_teorico.entity';
import { ProfesorDiseñaPractica } from 'src/_evaluacion/profesor_diseña_practica/entities/profesor_diseña_practica.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profesor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nif: number;
  @Column()
  nombre: string;
  @Column()
  apellido_1: string;
  @Column()
  apellido_2: string;
  @OneToMany(
    () => ProfesorDiseñaPractica,
    (profesordiseñapractica) => profesordiseñapractica.profesor,
  )
  ProfesorDiseñaPractica: ProfesorDiseñaPractica[];
  @OneToMany(() => ExamenTeorico, (ExamenTeorico) => ExamenTeorico.profesor)
  examenteorico: ExamenTeorico[];
}
