import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductCartService } from './product-cart.service';
import { CreateProductCartDto } from './dto/create-product-cart.dto';
import { UpdateProductCartDto } from './dto/update-product-cart.dto';

@Controller('productCart')
export class ProductCartController {
  constructor(private readonly productCartService: ProductCartService) {}

  @Post()
  create(@Body() createProductCartDto: CreateProductCartDto) {
    return this.productCartService.create(createProductCartDto);
  }

  @Get()
  findAll() {
    return this.productCartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productCartService.findOne(+id);
  }

  @Patch()
  update(@Body() updateProductCartDto: UpdateProductCartDto) {
    return this.productCartService.update(updateProductCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productCartService.remove(+id);
  }
}
