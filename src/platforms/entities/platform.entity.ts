import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('platforms')
export class Platform {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  platform: string;
}
