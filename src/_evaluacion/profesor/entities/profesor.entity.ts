import { ExamenTeorico } from 'src/_evaluacion/examen-teorico/entities/examen-teorico.entity';
import { ProfesorDiseñaPractica } from 'src/_evaluacion/profesor_diseña_practica/entities/profesor_diseña_practica.entity';
import { ProfesorDiseñaPracticaService } from 'src/_evaluacion/profesor_diseña_practica/profesor_diseña_practica.service';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Proveedor {
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
  @OneToMany(() => ProfesorDiseñaPractica, (psp) => psp.practica)
  profesordiseñapractica: ProfesorDiseñaPractica[];
  @OneToMany(() => ExamenTeorico, (psp) => psp.examenteorico)
  profesordiseñaexamenteorico: ProfesorDiseñaexamenteorico[];
}
