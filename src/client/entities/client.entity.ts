import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Client')
export class Client {
    @PrimaryGeneratedColumn()
    idClient: number;

    @Column({ type: 'varchar', length:80})
    SocialName: string;

    @Column({ type: 'varchar', length:80})
    Name: string;

    @Column({ type: 'varchar', length:15})
    Fone: string;

    @Column({ type: 'varchar', length:60})
    Email: string;

    @Column({ type: 'varchar', length:255})
    Password: string;

    @Column({ type: 'varchar', length:255})
    SaltPassword: string;

    @Column({ type: 'date'})
    BirthDate: Date;

    @Column({ type: 'varchar', length: 11})
    CPF: string;

    @Column({ type: 'varchar', length: 8})
    CEP: string;

    @Column({ type: 'varchar', length: 2})
    ST: string;

    @Column({ type: 'varchar', length: 60})
    City: string;

    @Column({ type: 'varchar', length: 100})
    Neighborhood: string;

    @Column({ type: 'varchar', length: 60})
    Complement: string;

    @Column({ type: 'varchar', length: 15})
    Number: string;

    @Column({ type: 'varchar', length: 80})
    Street: string;
}