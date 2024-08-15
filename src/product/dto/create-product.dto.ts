import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {

    @IsNumber()
    @Type(() => Number)
    idProduct: number;
    
    @IsString()
    category: string;

    @IsString()
    name: string;

    @IsString()
    desc: string;

    @IsNumber()
    quantityProducts: number;

    @IsNumber()
    @Type(() => Number)
    price: number;

    @IsString()
    @Type(() => Number)
    discountedPrice: number;

    @IsNumber()
    @Type(() => Number)
    numberInstallments: number;

    @IsNumber()
    @Type(() => Number)
    valueInstallments: number;

    @IsString()
    img: string;

}
