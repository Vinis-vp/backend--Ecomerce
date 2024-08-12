import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('ProductCart')
export class ProductCart {
    @PrimaryColumn({ type: 'int'})
    sell_idSell: number;

    @PrimaryColumn({ type: 'int' })
    product_idProduct: number;

    @Column({ type: 'int' })
    quantity: number;

}