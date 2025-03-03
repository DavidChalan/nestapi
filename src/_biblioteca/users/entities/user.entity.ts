import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class admin {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
}
