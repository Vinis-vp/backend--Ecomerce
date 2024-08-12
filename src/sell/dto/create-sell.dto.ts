import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateSellDto {

    @IsNumber()
    @Type(() => Number)
    idSell: number;

    @IsNumber()
    @Type(() => Number)
    idClient: number

    @IsDate()
    sellDate: Date;

    @IsString()
    paymentMethod: string;
    
}
