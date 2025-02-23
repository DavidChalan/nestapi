import { ExamenTeorico } from 'src/_evaluacion/examen_teorico/entities/examen_teorico.entity';
import { ProfesorDisenaPractica } from 'src/_evaluacion/profesor_disena_practica/entities/profesor_disena_practica.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profesor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nif: string;
  @Column()
  nombre: string;
  @Column()
  apellido_1: string;
  @Column()
  apellido_2: string;
  @OneToMany(
    () => ProfesorDisenaPractica,
    (profesorDisenaPractica) => profesorDisenaPractica.profesor,
  )
  profesorDisenaPracticas: ProfesorDisenaPractica[];
  @OneToMany(() => ExamenTeorico, (examenTeorico) => examenTeorico.profesor)
  examenesTeoricos: ExamenTeorico[];
}
