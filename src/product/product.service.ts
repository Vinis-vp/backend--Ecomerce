import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor (@InjectRepository(Product) private productRepository: Repository<Product> ) {}

  async create(createProductDto: CreateProductDto): Promise<Product>{
    const product = await this.productRepository.create(createProductDto);
    
    return this.productRepository.save(product);
  }

  async findAll(): Promise<Product[]>{
    return await this.productRepository.find();
  }

  async findOne(idProduct: number): Promise<Product> {
    return await this.productRepository.findOneBy({ idProduct });
  }

  async update(idProduct: number, updateProductDto: UpdateProductDto): Promise<Object> {
    return (await this.productRepository.update(idProduct, updateProductDto)).raw;
  }

  async remove(idProduct: number): Promise<string>{
     const result = await this.productRepository.delete(idProduct);
     if (result.affected>=1){
      return "deleted product";
     }
     return "product not deleted";
     
  }
}
  

