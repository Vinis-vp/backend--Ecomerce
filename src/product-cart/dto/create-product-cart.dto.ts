import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class CreateProductCartDto {

    @IsNumber()
    @Type(() => Number)
    sell_idSell: number;

    @IsNumber()
    @Type(() => Number)
    product_idProduct: number;

    @IsNumber()
    @Type(() => Number)
    quantity: number;

}
