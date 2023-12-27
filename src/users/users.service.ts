import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { Users } from './Users';

@Injectable()
export class UsersService {
  private users: UpdateUserDto[] = Users;
  create(createUserDto: CreateUserDto) {
    return Users.push(createUserDto);
  }

  findAll(): UpdateUserDto[] {
    return this.users;
  }
  findByType(name: string): UpdateUserDto[] {
    return this.users.filter((user: CreateUserDto) => name === user.name);
  }

  findOne(id: number): UpdateUserDto[] {
    const requestedUser = this.users.filter((user: CreateUserDto) => {
      return user.id === id;
    });
    if (!requestedUser) {
      throw new Error('User not found');
    }
    return requestedUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user: UpdateUserDto) => {
      let updated: UpdateUserDto = {};
      if (user.id === id) {
        updated = {
          ...user,
          ...updateUserDto,
        };
        return updated;
      }
      return user;
    });
    return this.findOne(id);
  }

  remove(id: number): UpdateUserDto[] {
    return this.users.filter((user: CreateUserDto) => id !== user.id);
  }
}
