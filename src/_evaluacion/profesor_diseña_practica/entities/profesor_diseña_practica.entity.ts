import { Practica } from 'src/_evaluacion/practica/entities/practica.entity';
import { Profesor } from 'src/_evaluacion/profesor/entities/profesor.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class ProfesorDiseñaPractica {
  @PrimaryColumn()
  id_profesor: number;
  @PrimaryColumn()
  id_practica: number;
  @Column()
  fecha: Date;
  @ManyToOne(() => Profesor, (profesor) => profesor.profesorDiseñaPracticas)
  @JoinColumn({ name: 'id_profesor' })
  profesor: Profesor;
  @ManyToOne(() => Practica, (practica) => practica.profesorDiseñaPractica)
  @JoinColumn({ name: 'id_practica' })
  practica: Practica;
}
