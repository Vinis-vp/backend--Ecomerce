import { HttpException, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClientService {
  constructor(@InjectRepository(Client) private clientRepository: Repository<Client>) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(createClientDto.password, salt);
    createClientDto.saltPassword = salt;
    createClientDto.password = hashPassword;

    const client = await this.clientRepository.create(createClientDto);
    return this.clientRepository.save(client);
  }

  async findAll(): Promise<Client[]> {
    return await this.clientRepository.find();
  }

  async findOne(CPF: string): Promise<Client> {
    return await this.clientRepository.findOneBy({ CPF });
  }

  async update(idClient: number, updateClientDto: UpdateClientDto): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(updateClientDto.password, salt);
    updateClientDto.saltPassword = salt;
    updateClientDto.password = hashPassword;

    const result = await this.clientRepository.update(idClient, updateClientDto);
    if (result.affected >= 1) {
      return 'modified client';
    }
    return 'unmodified client';
  }

  async remove(idClient: number): Promise<string> {
    const result = await this.clientRepository.delete(idClient);
    if (result.affected >= 1) {
      return 'deleted client';
    }
    return 'client not deleted';
  }

  async generateAndSendResetCode(cpf: string): Promise<number> {
    const token = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    const client = await this.findOne(cpf);
    if (!client.idClient) {
      return 200;
    }

    client.token = token;

    await this.clientRepository.save(client);
    return token;
  }

  async verifyResetPassword(CPF: string, token: number, newPassword: string): Promise<string> {
    const client = await this.findOne(CPF);

    if (!client.idClient) {
      return ' invalid client 400';
    }

    if (!client.token) {
      return ' inválido  token 400';
    }

    if (client.token === token) {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(newPassword, salt);

      await this.clientRepository.update(client.idClient, {
        password: hashPassword,
        saltPassword: salt,
      });
    }
    return 'password reset 200';
  }
}
