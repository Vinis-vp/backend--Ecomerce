import { forwardRef, Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { Client } from './entities/client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Client]), forwardRef(() => AuthModule)],
  controllers: [ClientController],
  providers: [ClientService],

  exports: [ClientService]
})
export class ClientModule {}
