import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('ProductCart')
export class ProductCart {
    @PrimaryColumn({ type: 'int'})
    Sell_idSell: number;

    @PrimaryColumn({ type: 'int' })
    Product_idProduct: number;

    @Column({ type: 'int' })
    Quantity: number;

}