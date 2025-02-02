import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
// Esto es lo que se guardara en la base ded atos
export class biblioteca {
  @PrimaryGeneratedColumn() // Genera un id autoincremental, si sólo fuera clave sería @PrimaryColumn()
  id: number;
  @Column({ type: 'varchar', length: 50 })
  titulo: string;
  @Column()
  autor: string;
  @Column()
  tema: string;
  @Column()
  editorial: string;
  @Column()
  stock: number;
  @Column()
  precio: number;
}
