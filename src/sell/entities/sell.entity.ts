import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Sell')
export class Sell {
    @PrimaryGeneratedColumn()
    idSell: number;

    @Column({ type: 'int'})
    idClient: number;

    @Column({type: 'datetime'})
    sellDate: Date;

    @Column('varchar', {length:45})
    paymentMethod: string

}