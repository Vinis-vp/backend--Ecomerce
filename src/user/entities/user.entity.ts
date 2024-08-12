import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {
    @PrimaryGeneratedColumn()
    idUser: number;

    @Column('varchar', {length:60})
    email: string;

    @Column('varchar', {length:255})
    password: string;

    @Column('varchar', {length:255})
    saltPassword: string;
};