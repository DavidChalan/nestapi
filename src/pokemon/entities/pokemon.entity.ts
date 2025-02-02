import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('pokemon')
// Esto es lo que se guardara en la base ded atos
export class Pokemon {
  @PrimaryGeneratedColumn() // Genera un id autoincremental, si sólo fuera clave sería @PrimaryColumn()
  id: number;
  @Column({ type: 'varchar', length: 50 })
  nombre: string;
  @Column('float') //float= numero con decimales
  altura: number;
  @Column('float')
  peso: number;
  @Column({ type: 'varchar', length: 50 })
  tipo: string;
  @Column({ type: 'varchar', length: 150 })
  imagen: string;
}
