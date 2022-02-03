import { JwtStrategy } from './jwt.strategy';
import { SharedModule } from './../shared/shared.module';
import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.pk,
      signOptions: { expiresIn: process.env['jwt_expire_time'] || '48h' },
    }),
    SharedModule,
    PassportModule,
    UsersModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
