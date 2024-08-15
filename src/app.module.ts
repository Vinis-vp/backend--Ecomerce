import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { ProductCartModule } from './product-cart/product-cart.module';
import { SellModule } from './sell/sell.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'vinicius',
    password: 'obj1987',
    database: 'dbEcommerce',
    entities: [__dirname + '/**/**/*.entity.js'],
    synchronize: false,
    })
  , ProductModule, ProductCartModule, SellModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
