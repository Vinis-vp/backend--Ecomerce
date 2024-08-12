import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Product')
export class Product {
    @PrimaryGeneratedColumn()
    idProduct: number;

    @Column({ type: 'varchar', length:255})
    desc: string;

    @Column({ type: 'float', width:45})
    discountedPrice: number;

    @Column({ type: 'float', width:10})
    price: number;

    @Column({ type: 'longtext'})
    img: string;
}