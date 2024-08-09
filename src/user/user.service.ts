import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DeleteResult, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor (@InjectRepository(User) private userRepository: Repository<User> ) {}

  async create(createUserDto: CreateUserDto): Promise<User>{
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(createUserDto.Password, salt);
    createUserDto.SaltPassword = salt;
    createUserDto.Password = hashPassword;

    const user = await this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]>{
    return await this.userRepository.find();
  }

  async findOne(Email: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({Email});
  }

  async update(idUser: number, updateUserDto: UpdateUserDto): Promise<Object> {
    return (await this.userRepository.update(idUser, updateUserDto)).raw;
  }

  async remove(idUser: number): Promise<string>{
    const result = await this.userRepository.delete(idUser);
    if(result.affected>=1){
      return "deleted user";
    }
     return "user not deleted";
  }

  
}
