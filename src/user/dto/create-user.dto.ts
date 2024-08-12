import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';


export class CreateUserDto {

    @IsNumber()
    @Type(() => Number)
    idUser: number;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsString()
    saltPassword: string;
}
