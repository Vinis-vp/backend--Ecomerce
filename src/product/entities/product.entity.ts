import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Product')
export class Product {
    @PrimaryGeneratedColumn()
    idProduct: number;

    @Column({ type: 'varchar', length:80})
    category: string;

    @Column({ type: 'varchar', length:80})
    name: string;

    @Column({ type: 'varchar', length:255})
    desc: string;

    @Column({ type: 'int', width:2})
    quantityProducts: number;
    
    @Column({ type: 'float', width:10})
    price: number;
    
    @Column({ type: 'float', width:45})
    discountedPrice: number;

    @Column({ type: 'int', width:2})
    numberInstallments: number;

    @Column({ type: 'float', width:10})
    valueInstallments: number;

    @Column({ type: 'longtext'})
    img: string;
}