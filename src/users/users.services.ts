import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeOrm/User';
import { NewUserParams, UpdateUserParams } from 'src/utils/types/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersServices {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  findUsers() {
    return this.userRepository.find();
  }

  newUser(newuserdetails: NewUserParams) {
    const user = this.userRepository.create({
      ...newuserdetails,
      createdAt: new Date(),
    });
    return this.userRepository.save(user);
  }
  updateUser(id: number, updateUserDetails: UpdateUserParams) {
    return this.userRepository.update({ id }, { ...updateUserDetails });
  }
  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }
}
