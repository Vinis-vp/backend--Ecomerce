import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateClientDto {
  @IsNumber()
  @Type(() => Number)
  idClient: number;

  @IsString()
  socialName: string;

  @IsString()
  name: string;

  @IsString()
  fone: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  saltPassword: string;

  @IsDate()
  birthDate: Date;

  @IsString()
  CPF: string;

  @IsString()
  CEP: string;

  @IsString()
  ST: string;

  @IsString()
  city: string;

  @IsString()
  neighborhood: string;

  @IsString()
  complement: string;

  @IsString()
  number: string;

  @IsString()
  street: string;

  @IsNumber()
  token: number;
}
