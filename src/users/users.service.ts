import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const usertData = [
  { name: 'John', email: 'test', id: 1 },
  { name: 'Ivan', email: 'test2', id: 2 },
];

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return usertData;
  }

  findOne(id: number) {
    const user = usertData.filter((user) => user.id === id)[0];
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
