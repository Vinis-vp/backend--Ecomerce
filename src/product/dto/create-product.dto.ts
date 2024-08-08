import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {

    @IsNumber()
    @Type(() => Number)
    idProduct: number;

    @IsString()
    Desc: string;

    @IsString()
    Title: string;

    @IsNumber()
    @Type(() => Number)
    Price: number;

    @IsString()
    Img: string;

}
