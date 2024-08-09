import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateClientDto {

    @IsNumber()
    @Type(() => Number)
    idClient: number;

    @IsString()
    SocialName: string;

    @IsString()
    Name: string;

    @IsString()
    Fone: string;

    @IsString()
    Email: string;

    @IsString()
    Password: string;

    @IsString()
    SaltPassword: string;

    @IsDate()
    BirthDate: Date;

    @IsString()
    CPF: string;

    @IsString()
    CEP: string;

    @IsString()
    ST: string;

    @IsString()
    City: string;

    @IsString()
    Neighborhood: string;

    @IsString()
    Complement: string;

    @IsString()
    Number: string;

    @IsString()
    Street: string;
    
}
