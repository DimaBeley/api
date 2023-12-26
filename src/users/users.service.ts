import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const userData = [
  { name: 'John', email: 'test', id: 1 },
  { name: 'Ivan', email: 'test2', id: 2 },
  { name: 'Oleg', email: 'test3', id: 3 },
  { name: 'Andrey', email: 'test4', id: 4 },
  { name: 'Yura', email: 'test5', id: 5 },
  { name: 'Ivan', email: 'test6', id: 6 },
];

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return { name: createUserDto.name };
  }

  findAll() {
    return userData;
  }
  findByType(name: string) {
    return userData.filter((user) => name === user.name);
  }

  findOne(id: number) {
    return userData.filter((user) => user.id === id)[0];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
