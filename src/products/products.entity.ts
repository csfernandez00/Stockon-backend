/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 40 })
  nombre: string;

  @Column('varchar', { length: 40 })
  modelo: string;

  @Column('varchar', { length: 40 })
  marca: string;

  @Column('int')
  cantidad: number;

  @Column('varchar', { length: 40 })
  codigo: string;
}
