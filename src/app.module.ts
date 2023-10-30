import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeOrm/User';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      username: 'root',
      password: '',
      database: 'nestDB',
      entities: [User],
      synchronize: false,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
