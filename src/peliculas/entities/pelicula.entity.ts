import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity('peliculas')
// Esto es lo que se guardara en la base ded atos
export class Pelicula {
  @PrimaryGeneratedColumn() // Genera un id autoincremental, si sólo fuera clave sería @PrimaryColumn()
  id: number;
  @Column({ type: 'varchar', length: 50 })
  titulo: string;
  @Column('int') //int => nos dice que el numero sera entero
  año: number;
  @Column({ type: 'varchar', length: 50 })
  autor: string;
  @Column({ type: 'varchar', length: 50 })
  tema: string;
  @Column({ type: 'varchar', length: 50 })
  director: string;
  @CreateDateColumn() // Fecha de creación automática
  fechaCreacion: Date;
  @UpdateDateColumn() // Fecha de actualización automática
  fechaActualizacion: Date;
}
