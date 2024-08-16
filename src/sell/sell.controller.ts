import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SellService } from './sell.service';
import { CreateSellDto } from './dto/create-sell.dto';
import { UpdateSellDto } from './dto/update-sell.dto';
import { Roles } from 'src/auth/role.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { RolesGuard } from 'src/auth/role.guard';
import { Role } from 'src/enum/role.enum';

@Controller('sell')
export class SellController {
  constructor(private readonly sellService: SellService) {}

  @Roles(Role.Client)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Body() createSellDto: CreateSellDto) {
    return this.sellService.create(createSellDto);
  }

  @Roles(Role.Client)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  findAll() {
    return this.sellService.findAll();
  }

  @Roles(Role.User, Role.Client)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellService.findOne(+id);
  }
  @Roles(Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSellDto: UpdateSellDto) {
    return this.sellService.update(+id, updateSellDto);
  }

  @Roles(Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellService.remove(+id);
  }
}
