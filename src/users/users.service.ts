import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  findOneOrFail: any;
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.UserRepository.create(createUserDto);
    const userExists = await this.UserRepository.findOneBy(createUserDto);

    if (userExists) {
      throw new NotFoundException('there is already a user with this name');
    }
    await this.UserRepository.save(user);

    return user;
  }

  findAll() {
    return this.UserRepository.find();
  }

  findOneByEmail(username: string) {
    return this.UserRepository.findOneBy({ email: username });
  }

  findOne(id: string) {
    const user = this.UserRepository.findOneBy({ id: id });
    if (!user) {
      throw new NotFoundException(`User ID ${id} not found`);
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.UserRepository.preload({
      id,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException(`User ID ${id} not found`);
    }

    return this.UserRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.UserRepository.findOneBy({ id: id });
    if (!user) {
      throw new NotFoundException(`user ID ${id} not found`);
    }

    return this.UserRepository.remove(user);
  }
}
