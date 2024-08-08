import { Module } from '@nestjs/common';
import { ProductCartService } from './product-cart.service';
import { ProductCartController } from './product-cart.controller';
import { ProductCart } from './entities/product-cart.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCart])],
  controllers: [ProductCartController],
  providers: [ProductCartService],
})
export class ProductCartModule {}
