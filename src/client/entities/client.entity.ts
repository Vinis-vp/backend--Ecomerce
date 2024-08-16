import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Client')
export class Client {
  @PrimaryGeneratedColumn()
  idClient: number;

  @Column({ type: 'varchar', length: 80 })
  socialName: string;

  @Column({ type: 'varchar', length: 80 })
  name: string;

  @Column({ type: 'varchar', length: 15 })
  fone: string;

  @Column({ type: 'varchar', length: 60 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 255 })
  saltPassword: string;

  @Column({ type: 'date' })
  birthDate: Date;

  @Column({ type: 'varchar', length: 11 })
  CPF: string;

  @Column({ type: 'varchar', length: 8 })
  CEP: string;

  @Column({ type: 'varchar', length: 2 })
  ST: string;

  @Column({ type: 'varchar', length: 60 })
  city: string;

  @Column({ type: 'varchar', length: 100 })
  neighborhood: string;

  @Column({ type: 'varchar', length: 60 })
  complement: string;

  @Column({ type: 'varchar', length: 15 })
  number: string;

  @Column({ type: 'varchar', length: 80 })
  street: string;

  @Column({ type: 'int', width: 6 })
  token: number;
}
