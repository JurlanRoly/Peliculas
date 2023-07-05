import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('priority')
export class Priority {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'name' })
  name: string;

  @Column({ type: 'boolean', name: 'active' })
  active: boolean;
}
