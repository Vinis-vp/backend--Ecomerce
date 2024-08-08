import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Product')
export class Product {
    @PrimaryGeneratedColumn()
    idProduct: number;

    @Column({ type: 'varchar', length:255})
    Desc: string;

    @Column({ type: 'varchar', length:45})
    Title: string;

    @Column({ type: 'float', width:10})
    Price: number;

    @Column({ type: 'longtext'})
    Img: string;
}