import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { Users } from './Users';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return Users.push(createUserDto);
  }

  findAll() {
    return Users;
  }
  findByType(name: string) {
    return Users.filter((user: CreateUserDto) => name === user.name);
  }

  findOne(id: number) {
    const requestedUser = Users.filter((user: CreateUserDto) => {
      return user.id === id;
    });
    if (!requestedUser) {
      throw new Error('User not found');
    }
    return requestedUser;
  }

  update(id: number, UpdateUserDto: UpdateUserDto) {
    return Users.map((user: UpdateUserDto) => {
      if (user.id === id) {
        console.log(UpdateUserDto, id, 'UpdateUserDto >>>>>>>>>>>>>>>>>>>');
        return {
          ...user,
          ...UpdateUserDto,
        };
      }
      return user;
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
