import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class CreateProductCartDto {

    @IsNumber()
    @Type(() => Number)
    Sell_idSell: number;

    @IsNumber()
    @Type(() => Number)
    Product_idProduct: number;

    @IsNumber()
    @Type(() => Number)
    Quantity: number;

}
