import { Alumno } from "src/alumno/entities/alumno.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
 
 @OneToMany(() => profesor, profesor => profesor.examenteorico)

@OneToMany(() => Alumno, Alumno => Alumno.examenteorico)
}