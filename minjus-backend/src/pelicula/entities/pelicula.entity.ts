import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pelicula')
export class Pelicula {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'id' })
  idp: string;

  @Column({ type: 'varchar', name: 'title' })
  title: string;

  @Column({ type: 'varchar', name: 'type' })
  type: string;

  @Column({ type: 'varchar', name: 'year' })
  year: string;

  @Column({ type: 'varchar', name: 'poster' })
  poster: string;
}
