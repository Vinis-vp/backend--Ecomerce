import { Injectable } from '@nestjs/common';
import { CreateSellDto } from './dto/create-sell.dto';
import { UpdateSellDto } from './dto/update-sell.dto';
import { Sell } from './entities/sell.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SellService {
  constructor (@InjectRepository(Sell) private sellRepository: Repository<Sell>) {}

  async create(createSellDto: CreateSellDto): Promise<Sell> {
    const sell = await this.sellRepository.create(createSellDto);
    return this.sellRepository.save(sell);
  }

  async findAll(): Promise<Sell[]> {
    return await this.sellRepository.find();
  }

  async findOne(idSell: number): Promise<Sell> {
    return await this.sellRepository.findOneBy({ idSell});
  }

  async update(idSell: number, updateSellDto: UpdateSellDto): Promise<Object> {
    return (await this.sellRepository.update(idSell, updateSellDto)).raw;
  }

  async remove(idSell: number): Promise<string> {
    const result = await this.sellRepository.delete(idSell);
    if(result.affected>=1){
      return "sale deleted";
    }
      return "sale not deleted";
  }
}
