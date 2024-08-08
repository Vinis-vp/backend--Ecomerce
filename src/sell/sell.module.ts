import { Module } from '@nestjs/common';
import { SellService } from './sell.service';
import { SellController } from './sell.controller';
import { Sell } from './entities/sell.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Sell])],
  controllers: [SellController],
  providers: [SellService],
})
export class SellModule {}
