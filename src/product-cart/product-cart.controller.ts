import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductCartService } from './product-cart.service';
import { CreateProductCartDto } from './dto/create-product-cart.dto';
import { UpdateProductCartDto } from './dto/update-product-cart.dto';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { Roles } from 'src/auth/role.decorator';
import { RolesGuard } from 'src/auth/role.guard';
import { Role } from 'src/enum/role.enum';

@Controller('productCart')
export class ProductCartController {
  constructor(private readonly productCartService: ProductCartService) {}
  
  @Roles(Role.Client)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Body() createProductCartDto: CreateProductCartDto) {
    return this.productCartService.create(createProductCartDto);
  }
  
  @Roles(Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  findAll() {
    return this.productCartService.findAll();
  }
  
  @Roles(Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productCartService.findOne(+id);
  }
  
  @Roles(Role.Client)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch()
  update(@Body() updateProductCartDto: UpdateProductCartDto) {
    return this.productCartService.update(updateProductCartDto);
  }
 
  @Roles(Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productCartService.remove(+id);
  }
}
