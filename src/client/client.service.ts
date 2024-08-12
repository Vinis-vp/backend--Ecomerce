import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClientService {
  constructor (@InjectRepository(Client) private clientRepository: Repository<Client>) {}
  
  async create(createClientDto: CreateClientDto): Promise<Client> {
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(createClientDto.password, salt);
    createClientDto.saltPassword = salt;
    createClientDto.password = hashPassword;

    const client = await this.clientRepository.create(createClientDto);
    return this.clientRepository.save(client);
  }

  async findAll(): Promise<Client[]> {
    return await this.clientRepository.find() ;
  }

  async findOne(idClient: number): Promise<Client> {
    return await this.clientRepository.findOneBy({ idClient});
  }

  async update(idClient: number, updateClientDto: UpdateClientDto): Promise<Object> {
    return (await this.clientRepository.update(idClient, updateClientDto)).raw ;
  }

  async remove(idClient: number): Promise<string> {
    const result = await this.clientRepository.delete(idClient);
    if (result.affected>=1){
      return "deleted client";
    }
    return "client not deleted";
  }
}
