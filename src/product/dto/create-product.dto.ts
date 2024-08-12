import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {

    @IsNumber()
    @Type(() => Number)
    idProduct: number;

    @IsString()
    desc: string;

    @IsString()
    @Type(() => Number)
    discountedPrice: number;

    @IsNumber()
    @Type(() => Number)
    price: number;

    @IsString()
    img: string;

}
