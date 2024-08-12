import { Injectable } from '@nestjs/common';
import { CreateProductCartDto } from './dto/create-product-cart.dto';
import { UpdateProductCartDto } from './dto/update-product-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCart } from './entities/product-cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductCartService {
  constructor (@InjectRepository(ProductCart) private productCartRepository: Repository<ProductCart>) {}
  
  async create(createProductCartDto: CreateProductCartDto): Promise<ProductCart> {
    const productCart = await this.productCartRepository.create(createProductCartDto);
    return this.productCartRepository.save(productCart);
  }

  async findAll(): Promise<ProductCart[]> {
    return await this.productCartRepository.find();
  }

  async findOne(sell_idSell: number): Promise<ProductCart> {
    return await this.productCartRepository.findOneBy({sell_idSell});
  }

  async update(updateProductCartDto: UpdateProductCartDto): Promise<ProductCart | string> {    
    const newProduct =   await this.productCartRepository.update({product_idProduct: updateProductCartDto.product_idProduct, sell_idSell: updateProductCartDto.sell_idSell }, {quantity: updateProductCartDto.quantity});

    if(newProduct.affected > 0) {
      return 'cart changed successfully';
    } else {
      return 'unmodified cart'
    }
  }

  async remove(sell_idSell: number): Promise<string> { 
    const result = await this.productCartRepository.delete(sell_idSell);
    if (result.affected>=1){
      return "deleted product cart";
    }
      return "product cart not deleted";
  }
}
