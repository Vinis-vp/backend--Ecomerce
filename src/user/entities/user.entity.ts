import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {
    @PrimaryGeneratedColumn()
    idUser: number;

    @Column('varchar', {length:60})
    Email: string;

    @Column('varchar', {length:255})
    Password: string;

    @Column('varchar', {length:255})
    SaltPassword: string;
};