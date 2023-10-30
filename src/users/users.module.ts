import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersServices } from './users.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeOrm/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersServices],
})
export class UsersModule {}
