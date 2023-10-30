import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsersServices } from './users.services';
import { NewUsrDto } from './dtos/newUser.dots';
import { UpdateUserDto } from './dtos/updateuser.dto';

@Controller('newuser')
export class UsersController {
  constructor(private userservices: UsersServices) {}

  @Get()
  async getUsers() {
    return await this.userservices.findUsers();
  }

  @Post()
  newUser(@Body() newuserdto: NewUsrDto) {
    return this.userservices.newUser(newuserdto);
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateuserDto: UpdateUserDto,
  ) {
    await this.userservices.updateUser(id, updateuserDto);
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.userservices.deleteUser(id);
  }
}
