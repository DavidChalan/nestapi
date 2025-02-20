// src/users/entities/user.entity.ts
import { Post } from 'src/_api/posts/entities/post.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
